import React from 'react';
import logo from '../images/Vector.svg';
import { Link } from 'react-router-dom';

const Header = function ({ name, dataUser }) {
  return (
    <header className={`header ${name === 'signup'} `}>
      <img className="header__logo" src={logo} alt="Логотип проекта Место"></img>
      {!dataUser && name ==='signup' ? <p className="header__subtitle"><Link to='/signin' className="header__subtitle-link">Войти</Link></p> : ''}
    </header>
  )
};

export default Header;