import { useEffect, useState } from "react";
import axios from 'axios';

const token = "e98e1b6a60e1cce2296a55b9bbb7a62e16436ddea249e42b733df5df240520867e8a9fa4ee90332b8cc7d1d38b40ef8492a07a60c93e912e2ce184470272893f5e6b65fa3fb6a2c0668e4daedd88dd5fda997e557622a86f784a70fe60d071c9e1d55afd4e6c63b3701142bb694a7bc25d03f6aadcadb1a8edc87019c1c9d5e0";

export default function Select({ setVideoData, allVideoData }) {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        (async function () {
            const { data } = await axios.get("https://my-strapi.kevinlebot.com/api/categories", {
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
    return <select onChange={handleChange} className="w-2/3 sm:w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-green-500 focus:ring-2 focus:ring-inset focus:ring-green-500 sm:max-w-xs sm:text-sm sm:leading-6">
                <option defaultValue="All">All</option>
                {categories.map((categorie) => (
                    <option key={categorie.id} value={categorie.attributes.categorie}>{categorie.attributes.categorie}</option>
                ))}
            </select>
}