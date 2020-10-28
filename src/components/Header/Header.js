import React, { Component } from 'react';

import './Header.css';
import Logo from './Logo/Logo';
import MainMenu from './MainMenu/MainMenu';


class Header extends Component {
  render() {
    return (
      <div className="Header">
        <Logo />
        <MainMenu />
      </div>
    );
  }
}

export default Header;
