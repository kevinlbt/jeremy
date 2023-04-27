import styled from "styled-components"
import { simpleParallax } from '../utils/Parallax'
import {useElementOnScreen} from '../utils/useElementOnScreen'
import {displayVideo, destroyVideo} from '../utils/jarallaxVideo'

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

    let userAgent = window.navigator.userAgent,
        platform = window.navigator?.userAgentData?.platform || window.navigator.platform,
        macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'],
        windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'],
        iosPlatforms = ['iPhone', 'iPad', 'iPod'];

    if (macosPlatforms.indexOf(platform) !== -1) {
        simpleParallax('banner', 1000);
        //console.log("mac")
    } else if (iosPlatforms.indexOf(platform) !== -1) {
        simpleParallax('banner', 1000);
        //console.log("ios")
    } else if (windowsPlatforms.indexOf(platform) !== -1 && (window.matchMedia("(max-width: 1024px)")).matches) {
        simpleParallax('banner', 1000);
        //console.log("window")
    } else if (windowsPlatforms.indexOf(platform) !== -1 && (window.matchMedia("(min-width: 1024px)")).matches) {
        simpleParallax('banner', 2);
        //console.log("window-grand")
    } else if (/Android/.test(userAgent) && (window.matchMedia("(max-width: 1024px)").matches)) {
        simpleParallax('banner', 1000);
        //console.log("android")
    } else if (/Android/.test(userAgent) && (window.matchMedia("(min-width: 1024px)")).matches) {
        simpleParallax('banner', 2);
        //console.log("android-grand")
    } else if (/Linux/.test(platform)) {
        simpleParallax('banner', 2);
        //console.log("linux")
    }

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
