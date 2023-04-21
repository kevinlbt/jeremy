import { jarallax, jarallaxVideo } from "jarallax";

function fadeIn(bloc) {
    const element = bloc.querySelector('div')
        // Initilize the opacity with 0.1
        let initOpacity = 0.1;
        // Update the opacity with 0.1 every 10 milliseconds
        const timer = setInterval(function () {
        if (initOpacity >= 1) {
            clearInterval(timer);
        }
        element.style.opacity = initOpacity;
        element.style.filter = 'alpha(opacity=' + initOpacity * 100 + ")";
        initOpacity += initOpacity * 0.5;
    }, 30);
}

function fadeOut(bloc) {
    const element = bloc.querySelector('div')
        // Initilize the opacity with 0.1
        let initOpacity = 1;
        // Update the opacity with 0.1 every 10 milliseconds
        const timer = setInterval(function () {
        if (initOpacity < 0.000001) {
            clearInterval(timer);
        }
        element.style.opacity = initOpacity;
        element.style.filter = 'alpha(opacity=' + initOpacity * 100 + ")";
        initOpacity -= initOpacity * 0.25;
    }, 35);
}

export function displayVideo (contain, dataVideo) {

    jarallaxVideo();
        jarallax(contain.current, {
        type: 'scroll',
        speed: 0.4,
        videoSrc: "mp4:"+dataVideo,
        videoPlayOnlyVisible: "true",
        container: '.banner',
        disableParallax: /iPad|iPhone|iPod|Android|macos/,
        disableVideo: /iPad|iPhone|iPod|Android|macos/
        });
        fadeIn(contain.current);
}

export function destroyVideo (contain) {
    fadeOut(contain.current)
    window.setTimeout(() => {
        jarallax(contain.current, 'destroy');
    }, 250);
    
}