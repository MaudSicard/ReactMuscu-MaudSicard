import React from 'react';
import './header.scss';
import Nav from './Nav.js';
import Title from './Title.js';


const Header = () => (
  <div className="header">
    <Title />
    <Nav />
  </div>
);

export default Header;
