import React from "react";
import leopardoVideo from "../assets/leopardo2.webm";
import adrastiaImg from "../assets/digital/adrastia-sticker.png";
import Window from "./Window";
import PixelIcon from "./PixelIcon";
import { useT } from "../prefs.jsx";

const ICONS = [
  { href: "#about", icon: "doc", label: { pt: "sobre.txt", en: "about.txt" } },
  { href: "#arts", icon: "folder", label: { pt: "artes/", en: "arts/" } },
  { href: "#dev", icon: "folder", label: { pt: "dev_/", en: "dev_/" } },
  { href: "#contact", icon: "mail", label: { pt: "contato.exe", en: "contact.exe" } },
];

const HomePage = () => {
  const t = useT();

  return (
    <section id="home" className="hero">
      <ul className="desk-icons">
        {ICONS.map((item) => (
          <li key={item.href}>
            <a href={item.href} className="desk-icon">
              <PixelIcon name={item.icon} />
              <span>{t(item.label)}</span>
            </a>
          </li>
        ))}
      </ul>

      <div className="hero-main">
        <p className="kicker">
          POEISIE OS · {t({ pt: "bem-vinde!", en: "welcome!" })}
        </p>
        <h1 className="hero-title">
          Caliel
          <br />
          Feijó
        </h1>
        <p className="hero-sub">
          {t({
            pt: "Artista visual e dev fullstack de Recife, PE.",
            en: "Visual artist and fullstack developer from Recife, PE.",
          })}
        </p>
        <p className="note hero-note">
          {t({
            pt: "oi! eu desenho, programo e ensino arte. fica à vontade ↓",
            en: "hi! i draw, code and teach art. make yourself at home ↓",
          })}
        </p>
      </div>

      <Window title="leopardo.webm" className="hero-video-win taped" draggable>
        <video
          className="hero-video"
          src={leopardoVideo}
          autoPlay
          loop
          muted
          playsInline
        />
      </Window>

      <img src={adrastiaImg} alt="" className="sticker hero-sticker" />
    </section>
  );
};

export default HomePage;
