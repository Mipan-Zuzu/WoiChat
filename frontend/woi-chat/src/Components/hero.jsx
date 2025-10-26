import '../index.css'
import Button from './Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Hero = ({relese, licensi}) => {
    const Text = "Get WoiChat®"
    return (
        <>
            <div className="justify-self-center font-mono ml-10 mt-15">
                <h1 className='text-5xl'>Chat Everytime <br /> Everywhere</h1>
                <p className='mt-5 max-w-sm mb-2'>A real-time chat application built with Python that enables instant messaging between users using WebSocket technology. Designed for speed, simplicity, and scalability..</p>
                <Badge relese={relese} licensi={licensi} />
                <Button text={Text} licensi={licensi} />
            </div>
        </>
    )
}

export default Hero

export function Badge({licensi, relese}) {
    return (
        <div className='flex mb-5'>
            <img className='mr-2' src={licensi} alt="licensi" />
            <img src={relese} alt="relese" />
        </div>
    )
}