import React, { useContext } from 'react';

import { AppContext } from '../../context/AppContext';

import Nav from '../../components/nav/Nav';
import Header from '../../components/header/Header';
import Gallery from '../../components/gallery/Gallery';

const HomePage = () => {
  const { sticky, setSticky } = useContext(AppContext);

  const changeNavLook = () => {
    if (window.scrollY >= 120) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  window.addEventListener('scroll', changeNavLook);

  return (
    <div className="home">
      <Nav
        className={`flex items-center gap-4 py-2 px-3 fixed top-0 left-0 z-20 w-full ${
          sticky ? 'bg-gray-800' : ''
        }`}
        opacity={`${sticky ? 'opacity-1' : 'opacity-0'}`}
      />
      <Header />
      <Gallery />
    </div>
  );
};

export default HomePage;
