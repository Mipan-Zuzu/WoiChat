const express = require("express");
const cors = require("cors");
const { default: mongoose } = require("mongoose");
const User = require("./model/model");
const dotenv = require("dotenv");
const sesion = require("express-session");

dotenv.config();

const dbUser = process.env.DB_USERNAME;
const dbPass = process.env.DB_PASSWORD;

const app = express();
app.use(
  cors({
    origin: "https://and-navy.vercel.app",
    credentials: true,
  })
);
app.use(express.json());

app.use(
  sesion({
    name: "sesion",
    secret: "rahasia",
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 100 * 60 * 60 },
  })
);

app.get("/", (req, res) => {
  res.send("home");
});

mongoose
  .connect(
    `mongodb+srv://${dbUser}:${dbPass}@cluster0.kvl3gwe.mongodb.net/people`
  )
  .then(() => console.log("connected"));

const createUser = async (req, res) => {
  try {
    const { Email, Password } = req.body;
    if (!Email || !Password) {
      return res
        .status(400)
        .json({ message: "Email dan Password kosong silakan isi dahulu" });
    }

    const newUser = new User({ Email, Password });
    const savedUser = await newUser.save();

    return res
      .status(201)
      .json({ message: "berhasil di tambahkan", user: savedUser });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ message: "gagal di tambahkan", error: error.message });
  }
};

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    return res.json(users);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "gagal mengambil data" });
  }
};

const loginCheck = async (req, res) => {
  const { Email, Password } = req.body;

  const user = await User.findOne({ Email, Password });
  if (!user) {
    return res.json({
      login: false,
      message: "Email atau password salah",
    });
  }
  req.session.user = {
    id: user._id,
    email: user.Email,
  };
  return res.json({
    login: true,
    message: "Berhasil login",
  });
};

app.get("/check-session", (req, res) => {
  if (req.session.user) {
    return res.json({
      login: true,
      user: req.session.user,
    });
  } 
  return res.json( {login: false})
});

app.get("/logout", (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      return res.status(500).json({ message: "failed to logout" });
    }

    res.clearCookie("sesion");
    res.json({ message: "berhasil logout" });
  });
});

app.post("/result", createUser);
app.get("/api", getAllUsers);
app.post("/login", loginCheck);

app.listen(5000, () => console.log("listening on port :5000"));
