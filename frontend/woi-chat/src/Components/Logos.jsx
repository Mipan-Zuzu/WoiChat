import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faNode, faReact } from "@fortawesome/free-brands-svg-icons";

const Logos = () => {
    const vite = "https://vite.dev/logo.svg"
    const express = "https://camo.githubusercontent.com/86f61f7d4367c71a580e11af0bcd4f333d1b967225a679a12998657db1307dd3/68747470733a2f2f692e636c6f756475702e636f6d2f7a6659366c4c376546612d3330303078333030302e706e67"
    const python = "https://th.bing.com/th/id/ODF.SWId9aBgwQh4GYX8Nki9BA?w=32&h=32&qlt=90&pcl=fffffa&o=6&pid=1.2"
    return (
        <>
            <div className="flex justify-self-center text-6xl pb-30 gap-10">
                <FontAwesomeIcon icon={faNode} className='text-green-600' />
                <img src={python} width={60} alt="" />
                <FontAwesomeIcon icon={faReact} className='text-cyan-700' />
                <img src={vite} width={50} alt="" />
                <img src={express} width={200} alt="" />
            </div>
        </>
    )
}

export default Logos