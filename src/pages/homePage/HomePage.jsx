import React from 'react';
import Nav from '../../components/nav/Nav';
import Header from '../../components/header/Header';
import Gallery from '../../components/gallery/Gallery';

const HomePage = () => {
  return (
    <div className="home">
      <Nav />
      <Header />
      <Gallery />
    </div>
  );
};

export default HomePage;
