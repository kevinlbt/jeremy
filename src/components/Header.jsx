import { useEffect } from 'react'
import { jarallax, jarallaxVideo } from "jarallax";
import { useRef } from 'react'
import video from "../assets/video/video.mp4"

export default function Header() {

    const containerRef = useRef();

    useEffect (() => {

        jarallaxVideo();
        jarallax(containerRef.current, {
        type: 'scroll',
        speed: 0.4,
        videoSrc: "mp4:"+video,
        videoPlayOnlyVisible: "true",
        container: '.banner',
        });

    })

    return <section ref={containerRef} className={`header flex flex-col justify-center items-center`}>
        <div className='text-center'>
            <h1>VOTRE VIDÉO POUR VOUS DÉMARQUER.</h1>
            <p>JE RÉALISE LE MONTAGE PROFESSIONNEL DE VOTRE VIDÉO</p>
        </div>
    </section>

}

