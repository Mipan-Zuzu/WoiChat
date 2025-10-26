import '../index.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMessage } from '@fortawesome/free-regular-svg-icons'
import { faGithub, faNpm, faDiscord } from "@fortawesome/free-brands-svg-icons";

const Navbar = () => {

    return (
        <div className='border-b-gray-700 border-b pb-6'>
            <div className='flex ml-5 gap-14'>
                <h1 className='font-mono mt-4 text-2xl'>WoiChat<FontAwesomeIcon className='ml-2' icon={faMessage}/></h1>
                <div className='text-gray-500 font-medium gap-6 flex mt-4'>
                    <h2 className='hover:border-b-2 duration-300 cursor-pointer'>Documentation</h2>
                    <h2 className='hover:border-b-2 duration-300 cursor-pointer'>Getting-Started</h2>
                    <h2 className='hover:border-b-2 duration-300 cursor-pointer'>Blog</h2>
                </div>
            </div>
            <div className='justify-self-end flex text-2xl gap-3 -mt-8 mr-10'>
                <FontAwesomeIcon icon={faNpm} />
                <FontAwesomeIcon icon={faGithub} />
                <FontAwesomeIcon icon={faDiscord} />
            </div>
        </div>
    )
}

export default Navbar