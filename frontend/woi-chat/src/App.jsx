import "./index.css";
import Navbar from "./Components/Navbar";
import Hero from "./Components/hero";
import Codespace from "./Components/Codespace";
import { motion } from "framer-motion";
import Logos from './Components/Logos'

function App() {
  const code = `
@socketio.on("message")
def handle_message(msg):
    print("pesan : ", msg)
    chat_history.append (msg)
    send (msg, broadcast=True)

@socketio.on("disconect")
def handle_disconect():
    username = users.pop(request.sid, "Unknown user")
    quit_msg = f"{username} left the chat"
    chat_history.append(quit_msg)
    send (quit_msg, broadcasdt=True)
    print (quit_msg)

if __name__ == "__main__":
    socketio.run(app, host="0.0.0.0", port=5000, debug=True)
   `;

  const UrlGithub = {
    relese:
      "https://img.shields.io/github/v/release/Mipan-Zuzu/WoiChat?label=release&color=darkgreen",
    licensi:
      "https://img.shields.io/github/license/Mipan-Zuzu/WoiChat?label=license&color=green",
  };

  return (
    <div className="bg-gray-950 text-white min-h-screen">
      <Navbar />
      <div className="flex justify-center gap-10 mt-15">
        <Hero relese={UrlGithub.relese} licensi={UrlGithub.licensi} />
        <Codespace code={code} lang="python" />
      </div>
      <LineThrought />
      <div className="mt-15">
        <ValueEbel />
      </div>
      <h1 className="text-center mt-20 mb-15 text-3xl font-mono">Modern Stack</h1>
      <Logos />
    </div>
  );
}

export function LineThrought() {
  return (
    <div className="justify-self-center mt-20 gap-2 text-3xl font-mono flex">
      <p>About</p>
      <p className="text-amber-600 hover:rotate-6 duration-300">Woichat</p>
    </div>
  );
}

export function ValueEbel() {
  return (
    <>
      <div className="flex justify-self-center gap-4 font-mono">
        <motion.div
          initial={{ opacity: 0, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex gap-10">
            <Cardtext
              headline="Fast Route"
              descrip=" WoiChat delivers ultra-fast real-time communication with a Fast Route architecture powered by Python, Express, and Vite for lightning-speed connections."
            />
            <Cardtext
              headline="Modern Language"
              descrip=" WoiChat is built with modern languages like Python, Express, and Vite blending performance, flexibility, and real-time communication for everyone."
            />
            <Cardtext
              headline="Reliable Smart"
              descrip=" WoiChat is designed to stay connected, delivering messages in real time even on the weakest internet connections  fast, light, and reliable."
            />
          </div>
        </motion.div>
      </div>
    </>
  );
}

export function Cardtext({ headline, descrip }) {
  return (
    <>
      <div className="column opacity-20 hover:opacity-100 duration-700 hover:scale-125">
        <h1 className="mb-2 text-2xl">{headline}</h1>
        <p className="text-gray-600 max-w-70">{descrip}</p>
      </div>
    </>
  );
}

export default App;
