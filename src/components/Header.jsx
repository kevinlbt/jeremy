import { useEffect } from 'react'
import { displayVideo } from '../utils/jarallaxVideo'
import { useRef } from 'react'
import video from "../assets/video/video.mp4"

export default function Header() {

    const containerRef = useRef();

    useEffect (() => {

        displayVideo(containerRef, video)

    })

    return <section ref={containerRef} id="head" className={`header flex flex-col justify-center items-center`}>
        <div className='text-center'>
            <h1>VOTRE VIDÉO POUR VOUS DÉMARQUER.</h1>
            <p>JE RÉALISE LE MONTAGE PROFESSIONNEL DE VOTRE VIDÉO</p>
        </div>
    </section>

}

