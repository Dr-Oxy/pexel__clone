import React, { useContext } from 'react';
import Nav from '../../components/nav/Nav';
import { AppContext } from '../../context/AppContext';

const SearchPage = () => {
  const { targetRef } = useContext(AppContext);

  return (
    <div className="search">
      <Nav className="bg-red-600" />
      <main className="search__grid">
        <div ref={targetRef} className="load__btn text-center animate-spin">
          <img
            className="h-20 mx-auto"
            src="/spinner.png"
            alt="loading spinner"
          />
        </div>
      </main>
    </div>
  );
};

export default SearchPage;
