import './index.css'
import Navbar from './Components/Navbar'
import Hero  from './Components/hero'

function App() {
  const UrlGithub = {
    relese : "https://img.shields.io/github/v/release/Mipan-Zuzu/WoiChat?label=release&color=darkgreen"
  }

  return (
    <div className='bg-gray-950 text-white min-h-screen'>
        <Navbar />
        <Hero relese={UrlGithub.relese}/>
    </div>
  )
}

export default App
