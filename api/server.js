const express = require("express")
const cors = require("cors");
const { default: mongoose } = require("mongoose");
const User = require("./model/model");
const dotenv = require('dotenv');

dotenv.config()

const dbUser = process.env.DB_USERNAME;
const dbPass = process.env.DB_PASSWORD;

const app = express()
app.use(cors())
app.use(express.json())

app.get("/", (req, res) => {
    res.send("home")
})

mongoose.connect(`mongodb+srv://${dbUser}:${dbPass}@cluster0.kvl3gwe.mongodb.net/people`)
.then(() => console.log
("connected"))


const createUser = async (req, res) => {
    try {
        const {Email, Password} = req.body
        if(!Email || !Password) {
            return res.status(400).json({ message : "Email dan Password kosong silakan isi dahulu"})
        }
        
        const newUser = new User({ Email, Password})
        const savedUser = await newUser.save()
        
        return res.status(201).json({ message : "berhasil di tambahkan", user : savedUser})
    } catch (error) {
        console.error(error)
        return res.status(500).json({ message : "gagal di tambahkan", error : error.message })
    }
}

const getAllUsers = async (req,res) => {

    try {
        const users = await User.find()
        return res.json(users)
    } catch (error) {
        console.error(error)
        return res.status(500).json({ message : "gagal mengambil data"})
    }
}

const loginCheck = async (req, res) => {
    const {Email, Password} = req.body
    const objek = await User.find({Email : Email , Password : Password})
    objek.length ? res.json({message : true}) : res.json({message : false})
}


app.post("/result" , createUser)
app.get("/api" , getAllUsers)
app.post("/login", loginCheck)

app.listen(5000, () => console.log("listening on port :5000"))