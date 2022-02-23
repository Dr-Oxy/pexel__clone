import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './homePage/HomePage';
import SearchPage from './searchPage/SearchPage';

const Layout = () => {
  return (
    <BrowserRouter>
      <div className="layout">
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/search/:value" element={<SearchPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default Layout;
