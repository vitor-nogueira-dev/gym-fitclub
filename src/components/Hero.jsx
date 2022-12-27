import React from "react";
import { Header } from "./Header";

import "./Hero.css";

import hero_image from '../assets/hero_image.png';
import hero_image_back from '../assets/hero_image_back.png';
import Heart from '../assets/heart.png';
import Calories from '../assets/calories.png';

export const Hero = () => {
  return (
    <div className="hero">
      <div className="left-h">
        <Header />
        {/* anúncio  */}
        <div className="the-best-ad">
          <div></div>
          <span>A melhor academia da cidade</span>
        </div>
        {/* Hero Heading */}
        <div className="hero-text">
          <div>
            <span className="stroke-text">Modele </span>
            <span>seu </span>
          </div>
          <div>
            <span>corpo ideal</span>
          </div>
          <div>
            <span>
              Aqui, vamos ajudá-lo a moldar e construir seu corpo ideal e viver
              sua vida ao máximo
            </span>
          </div>
        </div>
        {/* fotos  */}
        <div className="figures">
          <div>
            <span>+140</span>
            <span>Treinadores especializados</span>
          </div>
          <div>
            <span>+978</span>
            <span>Membros ativos</span>
          </div>
          <div>
            <span>+50</span>
            <span>Programas de condicionamento físico</span>
          </div>
        </div>
        {/* hero buttons */}
        <div className="hero-buttons">
          <button className="btn">Iniciar</button>
          <button className="btn">Saiba mais</button>
        </div>
      </div>
      <div className="right-h">right side</div>
    </div>
  );
};
