import { useEffect, useState } from 'react';
import axios from 'axios';
import Modale from '../components/modale';
import Select from '../components/Select';

const token = "e98e1b6a60e1cce2296a55b9bbb7a62e16436ddea249e42b733df5df240520867e8a9fa4ee90332b8cc7d1d38b40ef8492a07a60c93e912e2ce184470272893f5e6b65fa3fb6a2c0668e4daedd88dd5fda997e557622a86f784a70fe60d071c9e1d55afd4e6c63b3701142bb694a7bc25d03f6aadcadb1a8edc87019c1c9d5e0";

export default function Realisation() {

    const [allVideoData, setAllVideoData] = useState([]);
    const [videoData, setVideoData] = useState([])
    const [modale, setModale] = useState(null);
    const [displayModal, setDisplayModale] = useState(false);
    const [modaleAppear, setModaleAppear] = useState(null);
    const [displayPlayer, setDisplayPlayer] = useState(false);

    useEffect(() => {
      (async function () {
        const { data } = await axios.get("https://my-strapi.kevinlebot.com/api/videos?populate=*", {
          headers: {
              Authorization: `Bearer ${token}`,
            },
        });
        setAllVideoData(data.data);
        setVideoData(data.data);
      })();
    }, [setAllVideoData, setVideoData])

    //console.log(videoData)

    function handleOpenModale (index) {
      setDisplayModale(true);
      setModale(index);
      setModaleAppear(true);
      window.setTimeout(() => {
        setDisplayPlayer(true)
      }, 200)
    }

    return (
      <section className="real">
        <div className="flex lg:flex-row flex-col justify-evenly items-center p-12">
          <h1 className="lg:text-7xl text-5xl mb-12 lg:mb-0">realisation</h1>
          <Select allVideoData={allVideoData} setVideoData={setVideoData} />
        </div>
        {videoData.length === 0 ? <div className="loader mx-auto my-48"></div>
          :
          <div className="gridvideo grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-16 p-16">
          {videoData.map((video) => (
            <div key={video.id} className='cursor-pointer'>
              <img onClick={() => handleOpenModale(video.id)} className='rounded-xl' srcSet={`http://img.youtube.com/vi/${video.attributes.videoId}/maxresdefault.jpg`} alt="" />
                <Modale 
                  modale={modale}
                  displayModal={displayModal}
                  modaleAppear={modaleAppear}
                  displayPlayer={displayPlayer}
                  setModale={setModale}
                  setDisplayModale={setDisplayModale}
                  setModaleAppear={setModaleAppear}
                  setDisplayPlayer={setDisplayPlayer}
                  video={video}
                />
            </div>
          ))}
        </div>
        }

      </section>
    );
  }