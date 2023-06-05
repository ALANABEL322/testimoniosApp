import React from "react";
import imagemenworkspng from "../assets/image-men-works.png"


const Testimonio = () => {

  return (
    <div className="contenedor-testimonio">
        <img className="image-testimonio" src={imagemenworkspng} height={140} width={140} alt="testimonio-men" />
        <div className="contenedor-text-testimonio">
            <p className="nombre-testimonio">Emma Bostian</p>
            <p className="cargo-testimonio">Ingeniero de Software en Spotify</p>
            <p className="texto-testimonio">"Siempre he tenido probelmas para aprender JavaScript. He tomado muchos cursos, Estudiar JavaScript, así como estructuras de datos y algoritmos en diferentes cursos me dieron la habilidad y la confianza que necesitaba para conseguir el trabajo de mis sueños como ingeniero de software en Spotify."</p>
        </div>
    </div>
  )
};

export default Testimonio;