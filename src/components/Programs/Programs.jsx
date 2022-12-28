import React from "react";
import "./Programs.css";

import { programsData } from "../../data/programsData";
import RightArrow from "../../assets/rightArrow.png";

export const Programs = () => {
  return (
    <div className="Programs" id="programas">
      {/* header */}
      <div className="programs-header">
        <span className="stroke-text">Conheça</span>
        <span>nossos</span>
        <span className="stroke-text">Programas</span>
      </div>
      <div className="program-categories">
        {programsData.map((program, i) => (
          <div key={i} className="category">
            {program.image}
            <span>{program.heading}</span>
            <span>{program.details}</span>
            <div className="join-now">
              <span>Junte-se agora</span>
              <img src={RightArrow} alt="" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
