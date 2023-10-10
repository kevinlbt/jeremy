import React from "react";
import {useElementOnScreen} from '../utils/useElementOnScreen'

export default function About () {


    //use custom hook for appear text on banner when scroll
    const [containerRefAbout, isVisible] = useElementOnScreen({
        root: null,
        rootMargin: "0px",
        threshold: 0.6,
    })

    return <div className="about-new flex flex-col justify-center" ref={containerRefAbout}>
        <div className={`w-full lg:w-3/5 xl:w-2/5 p-6 sm:p-24 flex flex-col justify-center slide ${isVisible ? "active" : null}`}>
            <h1>A PROPOS</h1>
            <h2>DE JEREMY</h2>
            <p className="py-12">Salut ! Je suis créateur de contenu et monteur vidéo avec plus de 9 ans d’expérience.
                Ma spécialité est la création de contenu en ligne pour youtube et les réseaux sociaux. N'hésitez 
                pas à me contacter, je vous aiderais à donner vie à vos idées !
            </p>
            <a href="/contact" className="lg:w-2/4 xl:w-3/5 self-center text-center my-6 rounded-md px-5 lg:px-6 xl:px-8 py-2 text-xl">CONTACTEZ-MOI</a>
        </div>
    </div>
}