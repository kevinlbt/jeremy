import { useEffect, useRef, useState } from "react";

export const useElementOnScreen = (options) => {
    const containerRef = useRef(null);
    const [isVisible, setIvisible] = useState(false);

    const callbackFunction = (entries) => {
        //console.log(entries);
        const [ entry ] = entries;
        setIvisible(entry.isIntersecting)
    }

    useEffect(() => {

        let containerRefCurrent = containerRef.current;

        //console.log(containerRefCurrent);
        const observer = new IntersectionObserver(callbackFunction, options)
        if(containerRef.current) observer.observe(containerRefCurrent);

        return () => {
            if(containerRefCurrent) observer.unobserve(containerRefCurrent)
        }
    }, [containerRef, options])

    return [containerRef, isVisible]
}