/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import './App.css';
import Nav from './components/nav/Nav';
import Header from './components/header/Header';
import Gallery from './components/gallery/Gallery';

import { AppProvider } from './context/AppContext';

function App() {
  return (
    <div className="App">
      <AppProvider>
        <Nav />
        <Header />
        <Gallery />
      </AppProvider>
    </div>
  );
}

export default App;
