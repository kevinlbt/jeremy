import styled from "styled-components"
import { simpleParallax } from '../utils/Parallax'
import {useElementOnScreen} from '../utils/useElementOnScreen'
import {displayVideo, destroyVideo} from '../utils/jarallaxVideo'

simpleParallax('banner', 2);

//background image dynamic change
const BannerSection = styled.section`
    ${(props) => 
    `background-image: url(${props.isDataImg.imageDesktop});
    @media (min-width: 640px) and (max-width: 1024px) {
        background-image: url(${props.isDataImg.imageTablet})
    };
    @media (max-width: 640px) {
        background-image: url(${props.isDataImg.imageMobile});
    };
    `}
`

export default function Banner ({data}) {

    //use custom hook for appear text on banner when scroll
    const [containerRef, isVisible] = useElementOnScreen({
        root: null,
        rootMargin: "0px",
        threshold: 0.6,
    })

    return <BannerSection isDataImg={data} className="banner flex flex-col justify-center">
                <div onMouseEnter={()=> displayVideo(containerRef, data.video)} onMouseLeave={()=> destroyVideo(containerRef)} ref={containerRef} className="flex flex-col justify-center">
                    <h2 className={`slide ml-10 ${isVisible ? "active" : null}`}><strong>{data.channel}</strong></h2>
                    <p className={`slide ml-10 ${isVisible ? "active" : null}`}>{data.description}</p>
                    <a className={`slide ml-10 ${isVisible ? "active" : null}`} href={data.youtube} >Voir la chaîne</a> 
                </div>
            </BannerSection>
}
