
import {simpleParallax} from '../utils/Parallax'

export default function Header() {

    console.log("render");

    let userAgent = window.navigator.userAgent,
        platform = window.navigator?.userAgentData?.platform || window.navigator.platform,
        macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'],
        windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'],
        iosPlatforms = ['iPhone', 'iPad', 'iPod'];

    if (macosPlatforms.indexOf(platform) !== -1) {
        simpleParallax('header', 1000);
        //console.log("mac")
    } else if (iosPlatforms.indexOf(platform) !== -1) {
        simpleParallax('header', 1000);
        //console.log("ios")
    } else if (windowsPlatforms.indexOf(platform) !== -1 && (window.matchMedia("(max-width: 1024px)")).matches) {
        simpleParallax('header', 1000);
        //console.log("window")
    } else if (windowsPlatforms.indexOf(platform) !== -1 && (window.matchMedia("(min-width: 1024px)")).matches) {
        simpleParallax('header', 2);
        //console.log("window-grand")
    } else if (/Android/.test(userAgent) && (window.matchMedia("(max-width: 1024px)").matches)) {
        simpleParallax('header', 1000);
        //console.log("android")
    } else if (/Android/.test(userAgent) && (window.matchMedia("(min-width: 1024px)")).matches) {
        simpleParallax('header', 2);
        //console.log("android-grand")
    } else if (/Linux/.test(platform)) {
        simpleParallax('header', 2);
        //console.log("linux")
    }


    return <section id="head" className={`header`}></section>

}

