import React from "react";

import "./Reasons.css";
import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.png";
import image3 from "../../assets/image3.png";
import image4 from "../../assets/image4.png";
import tick from "../../assets/tick.png";

import nb from "../../assets/nb.png";
import adidas from "../../assets/adidas.png";
import nike from "../../assets/nike.png";
export const Reasons = () => {
  return (
    <div className="Reasons" id="sobreNos">
      <div className="left-r">
        <img src={image1} alt="" />
        <img src={image2} alt="" />
        <img src={image3} alt="" />
        <img src={image4} alt="" />
      </div>
      <div className="right-r">
        {/* <span>Sobre nós</span> */}
        <div>
          <span className="stroke-text">Porque </span>
          <span>nos escolher?</span>
        </div>
        <div className="details-r">
          <div>
            <img src={tick} alt="" />
            <span>Mais de 140+ treinadores especializados</span>
          </div>
          <div>
            <img src={tick} alt="" />
            <span>Treine de forma mais inteligente e rápida do que antes</span>
          </div>
          <div>
            <img src={tick} alt="" />
            <span>1 programa gratuito para novos membros</span>
          </div>
          <div>
            <img src={tick} alt="" />
            <span>Parceiros confiáveis</span>
          </div>
        </div>
        <span
          style={{
            color: "var(--gray)",
            fontWeight: "normal",
          }}
        >
          Nossos Parceiros
        </span>
        <div className="partners">
          <img src={nb} alt="" />
          <img src={adidas} alt="" />
          <img src={nike} alt="" />
        </div>
      </div>
    </div>
  );
};
