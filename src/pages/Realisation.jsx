import { useEffect, useState } from 'react';
import axios from 'axios';
import Modale from '../components/modale';
import Select from '../components/Select';

const token = "16a6cdf9647c958ad6a1c0719c4ae8b8ad3284f226765e18aef0b9237f0b52cce29f8f52d85016cf622887dfeaf6dbd9380eff17606836410a7db2df58c7557c83efeddf6068a47da9c2ce831cb8ea637f2c7b1ac2ddb097aef2f5da0e881d6d96d8f18f4dd910757bc64d62ca37a557334161d3a2d60532fc0f0aa2c0baa511";

export default function Realisation() {

    const [allVideoData, setAllVideoData] = useState([]);
    const [videoData, setVideoData] = useState([])
    const [modale, setModale] = useState(null);
    const [displayModal, setDisplayModale] = useState(false);
    const [modaleAppear, setModaleAppear] = useState(null);
    const [displayPlayer, setDisplayPlayer] = useState(false);

    useEffect(() => {
      (async function () {
        const {data} = await axios.get("http://localhost:1338/api/videos?populate=*", {
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
      },200)
    }

    return (
      <section className="real">
        <div className="flex justify-evenly items-center p-12">
          <h1 className="text-7xl">realisation</h1>
          <Select allVideoData={allVideoData} videoData={videoData} setVideoData={setVideoData} />
        </div>
        <div className="gridvideo grid grid-cols-3 gap-16 p-16">
          {videoData.map((video) => (
            <div key={video.id} className='cursor-pointer'>
              <img onClick={() => handleOpenModale(video.id)} className='rounded-xl' src={`http://img.youtube.com/vi/${video.attributes.videoId}/maxresdefault.jpg`} alt="" />
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
      </section>
    );
  }