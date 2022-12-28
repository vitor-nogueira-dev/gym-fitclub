import React, { useState } from "react";

import Logo from "../../assets/logo.png";
import Bars from "../../assets/bars.png";
import { Link } from "react-scroll";
import "./Header.css";

export const Header = () => {
  const mobile = window.innerWidth <= 768 ? true : false;
  const [menuOpened, setMenuOpened] = useState(false);
  return (
    <div className="header" id="paginaInicial">
      <img src={Logo} alt="" className="logo" />
      {menuOpened === false && mobile === true ? (
        <div
          style={{
            backgroundColor: "var(--appColor",
            padding: "0.5rem",
            borderRadius: "5px",
          }}
          onClick={() => setMenuOpened(true)}
        >
          <img
            src={Bars}
            alt="icone menu hamburguer"
            style={{ width: "2rem", height: "1.5rem" }}
          />
        </div>
      ) : (
        <ul className="header--menu">
          <li>
            <Link
              to="paginaInicial"
              onClick={() => setMenuOpened(false)}
              span={true}
              smooth={true}
            >
              Página inicial
            </Link>
          </li>
          <li>
            <Link
              to="programas"
              onClick={() => setMenuOpened(false)}
              span={true}
              smooth={true}
            >
              Programas
            </Link>
          </li>

          <li>
            <Link
              to="sobreNos"
              onClick={() => setMenuOpened(false)}
              span={true}
              smooth={true}
            >
              Sobre nós
            </Link>
          </li>
          <li>
            <Link
              to="planos"
              onClick={() => setMenuOpened(false)}
              span={true}
              smooth={true}
            >
              Planos
            </Link>
          </li>
          <li>
            <Link
              to="depoimentos"
              onClick={() => setMenuOpened(false)}
              span={true}
              smooth={true}
            >
              Depoimentos
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
};
