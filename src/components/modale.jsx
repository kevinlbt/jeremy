import React, { useEffect, useRef } from "react";
import ReactPlayer from 'react-player'

export default function Modale ({modale, displayModal, modaleAppear, displayPlayer, setModale, setDisplayModale, setModaleAppear, setDisplayPlayer, video}) {

    const wrapperRef = useRef(null);

    useOutsideRemoveModal(wrapperRef);

    function useOutsideRemoveModal(ref) {
        useEffect(() => {
        
            function handleClickOutside(event) {
                if (ref.current && !ref.current.contains(event.target)) {
                    setModaleAppear(false);
                    window.setTimeout(() => {
                        setDisplayModale(false);
                        setModale(null);
                        setDisplayPlayer(false);
                    },200)
                }
            }
            
            document.addEventListener("mousedown", handleClickOutside);
            return () => {
                document.removeEventListener("mousedown", handleClickOutside);
            };
        }, [ref]);
    }
    
      function handleRemoveModale () {
        setModaleAppear(false);
        window.setTimeout(() => {
          setDisplayModale(false);
          setModale(null);
          setDisplayPlayer(false);
      },200)
        
    }

    return <React.Fragment>
        {displayModal && modale ===  video.id ? 
            <div ref={wrapperRef} className={`modaleVideo flex flex-col justify-center sm:justify-around items-center ${modaleAppear ? "modaleAppear" : "modaleDisappear"}`}>
                <i onClick={handleRemoveModale} className="cross-modale fa-solid fa-square-xmark cursor-pointer"></i>
                <h3 className='text-2xl sm:text-4xl text-center mb-9 mt-6'>{video.attributes.titre} </h3>
                {displayPlayer ?
                    <ReactPlayer
                        className="react_player"
                        width='62vw'
                        height='min-content'
                        controls
                        playing
                        origin="http://www.youtube.com"
                        baseUrl="https://youtube.com"
                        url={`https://youtu.be/${video.attributes.videoId}`} />
                    : null}
                </div> 
              : null }
    </React.Fragment>


}

