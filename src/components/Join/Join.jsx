import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

import "./Join.css";

export const Join = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_rh1elnb",
        "template_bgtxzzq",
        form.current,
        "cEeZF2PsyKVjEerkE"
      )
      .then(
        (result) => {
          result.text === "OK" ? alert("Enviado com sucesso") : alert("Digite um E-mail válido");
        },
        (error) => {
          alert(error.text);
        }
      );
  };
  return (
    <div className="Join" id="join-us">
      <div className="left-j">
        <hr />
        <div>
          <span className="stroke-text">Pronto para </span>
          <span>explorar</span>
        </div>
        <div>
          <span>o seu</span>
          <span className="stroke-text">melhor?</span>
        </div>
      </div>
      <div className="right-j">
        <form ref={form} className="email-container" onSubmit={sendEmail}>
          <input
            type="email"
            name="user_email"
            placeholder="Insira seu e-mail"
          />
          <button className="btn btn-j">Enviar</button>
        </form>
      </div>
    </div>
  );
};
