import React from "react";

import "./hero.css";

export default function Hero() {
  
  return (
    <>
      <div className="hero-container" id="home">
        <div className="hero-top">
          <img src="./images/greg.jpg" alt="" className="avatar" />
        </div>
        <div className="hero-infos">
          <h1 className="hero-title">
            Moi c'est Gregoire, je suis Motion designer & 3D artist sur la cote
            d'azur.
          </h1>
          <p className="hero-descr">
            Je suis un autodidacte passionné et motivé spécialisé dans le motion
            design et la 3D. <br />
            J'ai acquis des compétences solides dans ce domaine au travers
            d'heures d'apprentissage autonome.
          </p>
        </div>
      </div>

      <div className="line">
        <div className="specs">
          <div className="spe af">After Effects</div>
          <div className="spe ph">Photoshop</div>
          <div className="spe il">Illustrator</div>
          <div className="spe pr">Premiere Pro</div>
          <div className="spe mi">Midjourney</div>
          <div className="spe ds">3DS Max</div>
          <div className="spe bl">Blender</div>
        </div>
      </div>
    </>
  );
}
