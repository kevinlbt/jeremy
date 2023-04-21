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
                <div ref={wrapperRef} className={`modaleVideo flex flex-col justify-center items-center ${modaleAppear ? "modaleAppear" : "modaleDisappear"}`}>
                  <i onClick={handleRemoveModale} className="cross-modale fa-solid fa-square-xmark cursor-pointer"></i>
                  <h3 className='text-4xl text-center mb-7'>{video.attributes.titre} </h3>
                  {displayPlayer ? 
                  <ReactPlayer
                    width='65vw'
                    height='40vw'
                    controls
                    playing
                    url={`https://www.youtube.com/watch?v=${video.attributes.videoId}`}
                  />
                  : null }
                </div> 
              : null }
    </React.Fragment>


}
