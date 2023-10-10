import Banner from "../components/Banner";
import {data} from "../data/data.js";

export default function Youtube () {
    return (
      <section className="youtube">
        <div className="m-16">
            <h1>CRÉATION</h1>
            <h2>DE CONTENU</h2>
        </div>
        <Banner data={data[0]}/>
        <Banner data={data[1]}/>
        <Banner data={data[2]}/>
      </section>
    );
  }