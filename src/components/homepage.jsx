import React from "react";
import leopardoVideo from "../assets/leopardo2.webm";
import { useT } from "../prefs.jsx";

const HomePage = () => {
  const t = useT();

  return (
    <section className="home">
      <div>
        <h1 className="home-title">Caliel Feijó</h1>
        <p className="home-sub">
          {t({
            pt: "Artista visual e dev fullstack de Recife, PE.",
            en: "Visual artist and fullstack developer from Recife, PE.",
          })}
        </p>
        <p className="home-hello">
          {t({
            pt: "Oi! Eu desenho, programo e ensino arte. Fica à vontade pra explorar.",
            en: "Hi! I draw, code and teach art. Make yourself at home.",
          })}
        </p>
        <div className="home-links">
          <a href="#arts" className="arrow-link">{t({ pt: "artes →", en: "arts →" })}</a>
          <a href="#dev" className="arrow-link">dev_ →</a>
          <a href="#contact" className="arrow-link">{t({ pt: "contato →", en: "contact →" })}</a>
        </div>
      </div>

      <video
        className="home-video"
        src={leopardoVideo}
        autoPlay
        loop
        muted
        playsInline
      />
    </section>
  );
};

export default HomePage;
