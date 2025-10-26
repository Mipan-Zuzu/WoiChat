import './index.css'
import Navbar from './Components/Navbar'
import Hero  from './Components/hero'
import Codespace from './Components/Codespace'

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
   `

  const UrlGithub = {
    relese : "https://img.shields.io/github/v/release/Mipan-Zuzu/WoiChat?label=release&color=darkgreen",
    licensi : "https://img.shields.io/github/license/Mipan-Zuzu/WoiChat?label=license&color=green"
  }

  return (
    <div className='bg-gray-950 text-white min-h-screen'>
        <Navbar />
        <div className='flex justify-center gap-10 mt-15'>
                  <Hero relese={UrlGithub.relese} licensi={UrlGithub.licensi}/>
                <Codespace  code={code} lang='python' />
        </div>
    </div>
  )
}

export default App
