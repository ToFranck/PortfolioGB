import React from "react";
import "./infos.css";
import ImplModel from "../model/implModel.jsx";

export default function Infos() {
  return (
    <>
      <div className="infos-container" id="infos">
        <div className="infos-left">
          <h2 className="infos-title">
            Ensemble pour des productions captivantes
          </h2>
          <p className="infos-text">
            Je suis un professionnel aguerri du montage, du motion design et de
            la 3D, prêt à mettre mes compétences au service de vos futurs
            projets. Avec une expertise solide dans ces domaines, je peux créer
            des productions visuellement percutantes et de grande qualité.
            N'hésitez pas à consulter mes réalisations sur mes plateformes en
            ligne et à me contacter directement via mes réseaux sociaux pour
            discuter de vos projets. Je suis impatient de collaborer avec vous
            et de donner vie à vos idées créatives.
          </p>
          <div className="rs">
            <a
              href="https://www.linkedin.com/in/grégoire-birlian-5376b9230/"
              target="blank"
              className="rs-links"
            >
              Linkedin
            </a>
            <a href="/" target="blank" className="rs-links">
              Mail
            </a>
            <a
              href="https://www.instagram.com/grego_art_0613/"
              target="blank"
              className="rs-links"
            >
              Instagram
            </a>
            <a
              href="https://www.artstation.com/grego_art"
              target="blank"
              className="rs-links"
            >
              ArtStation
            </a>
          </div>
        </div>
        <div className="infos-right">
          <ImplModel />
        </div>
      </div>

      <div className="line"></div>
    </>
  );
}
