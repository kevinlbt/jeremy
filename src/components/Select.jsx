import { useEffect, useState } from "react";
import axios from 'axios';

const token = "16a6cdf9647c958ad6a1c0719c4ae8b8ad3284f226765e18aef0b9237f0b52cce29f8f52d85016cf622887dfeaf6dbd9380eff17606836410a7db2df58c7557c83efeddf6068a47da9c2ce831cb8ea637f2c7b1ac2ddb097aef2f5da0e881d6d96d8f18f4dd910757bc64d62ca37a557334161d3a2d60532fc0f0aa2c0baa511";

export default function Select ({setVideoData, videoData, allVideoData}) {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        (async function () {
          const {data} = await axios.get("http://localhost:1338/api/categories", {
            headers: {
                Authorization: `Bearer ${token}`,
              },
          });
          setCategories(data.data)
        })();
      }, [setCategories])

    function handleChange (e) {

        if (e.target.value === "All") {
            setVideoData(allVideoData);
        }
        else {
            const newData = allVideoData;
            const newDataFiltered = newData.filter((data) => data.attributes.categorie.data.attributes.categorie === e.target.value);
            setVideoData(newDataFiltered);
        }
    }
    return  <select onChange={handleChange} className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
                <option defaultValue="All">All</option>
                {categories.map((categorie) => (
                    <option key={categorie.id} value={categorie.attributes.categorie}>{categorie.attributes.categorie}</option>
                ))}
            </select>
}