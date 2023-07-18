import React from 'react';
import logo from '../images/Vector.svg';

const Header = function ({ name, dataUser }) {
  return (
    <header className="header ">
      <img className="header__logo" src={logo} alt="Логотип проекта Место"></img>
    </header>
  )
};

export default Header;