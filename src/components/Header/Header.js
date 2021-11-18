import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../../assets/images/logo.png';

const Header = function () {
  return (
    <header className="header">
      <div className="content-container">
        <div className="header__content">
          <Link className="header__title" to="/">
            <img className="header__logo" src={logo} alt="logo abc racing" />
          </Link>
          <div className="header__content__links">
            <Link className="header__title" to="/athletes">
              <h4>Athletes</h4>
            </Link>
            <Link className="header__title" to="/videos">
              <h4>Videos</h4>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
