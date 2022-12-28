import React from "react";
import { Header } from "../Header/Header";
import { motion } from "framer-motion";

import "./Hero.css";

import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import Heart from "../../assets/heart.png";
import Calories from "../../assets/calories.png";

export const Hero = () => {
  const transition = { type: "spring", duration: 3 };
  const mobile = window.innerWidth <= 768 ? true : false;
  return (
    <div className="hero">
      <div className="blur hero-blur"></div>
      <div className="left-h">
        <Header />
        {/* anúncio  */}
        <div className="the-best-ad">
          <motion.div
            initial={{ left: mobile ? "165px" : "238px" }}
            whileInView={{ left: "8px" }}
            transition={{ ...transition, type: "tween" }}
          ></motion.div>
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
            <span>Progamas fitness</span>
          </div>
        </div>
        {/* hero buttons */}
        <div className="hero-buttons">
          <button className="btn">Iniciar</button>
          <button className="btn">Saiba mais</button>
        </div>
      </div>
      <div className="right-h">
        <button className="btn">Entrar</button>

        <motion.div
          initial={{ right: "-1rem" }}
          whileInView={{ right: "4rem" }}
          transition={transition}
          className="heart-rate"
        >
          <img src={Heart} alt="" />
          <span>Frequência cardíaca</span>
          <span>116 bpm</span>
        </motion.div>

        {/* hero images */}
        <img src={hero_image} alt="" className="hero-image" />
        <motion.img
          initial={{ right: "11rem" }}
          whileInView={{ right: "25rem" }}
          transition={transition}
          src={hero_image_back}
          alt=""
          className="hero-image-back"
        />
        {/* calories */}
        <motion.div
          initial={{ left: "10rem" }}
          whileInView={{ left: "1.5rem" }}
          transition={transition}
          className="calories"
        >
          <img src={Calories} alt="" />
          <div>
            <span>Calorias queimadas</span>
            <span>220 kcal</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
