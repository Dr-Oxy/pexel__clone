/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Hero from '../hero/Hero';
import './header.css';

const Header = () => {
  return (
    <header
      style={{ backgroundImage: "url('/pexels-bg.jpeg')" }}
      className="header"
    >
      <Hero />
    </header>
  );
};

export default Header;
