
export default function About () {
    return (
      <section className="w-full lg:w-4/5 mx-auto about flex flex-col lg:flex-row justify-center items-center">
        <div className="img-about w-2/5 lg:w-2/5 h-auto m-24">
          <img className="rounded" srcSet="../assets/champ.webp" alt="jeremy with camera in Wheat field" />
        </div> 

        <div className="text-about mb-12 w-full lg:w-2/4 flex flex-col justify-center items-center">
          <h1>A propos</h1>
          <p>Salut, je m’appelle Jeremy Pettré, tu me connais peut-être sous le nom de Zeremy sur YouTube ou encore Ocarina pour mes musiques. Vidéaste, youtubeur et producteur de musique à mes heures perdues, tu retrouveras sur mon site, toutes mes créations audiovisuelles et musicales.</p>
        </div>
      </section>
    );
  }