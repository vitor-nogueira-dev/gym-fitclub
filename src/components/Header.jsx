import React from 'react'
import Logo from '../assets/logo.png';
import './Header.css';

export const Header = () => {
  return (
    <div className="header">
      <img src={Logo} alt="" className='logo'/>
      <ul className='header--menu'>
        <li>Página inicial</li>
        <li>Programas</li>
        <li>Sobre nós</li>
        <li>Planos</li>
        <li>Depoimentos</li>
      </ul>
    </div>
  )
}
