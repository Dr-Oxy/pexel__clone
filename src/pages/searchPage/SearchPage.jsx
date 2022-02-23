import React, { useContext, useEffect } from 'react';
import { AppContext } from '../../context/AppContext';
import { useParams } from 'react-router-dom';

import Nav from '../../components/nav/Nav';
import SearchMasonry from '../../components/searchMasonry/SearchMasonry';

const SearchPage = () => {
  const { targetRef, setSticky } = useContext(AppContext);

  let { value } = useParams();

  useEffect(() => {
    setSticky(true);
  });

  return (
    <div className="search">
      <Nav />

      <main className="search__layout py-4 px-4 md:px-8 mt-12">
        <h1 className="capitalize font-bold text-2xl text-black text-center mb-7">
          {value} Photos
        </h1>

        <SearchMasonry />

        <div
          ref={targetRef}
          className="load__btn text-center animate-spin mt-3"
        >
          <img
            className="h-20 mx-auto opacity-40"
            src="/spinner.png"
            alt="loading spinner"
          />
        </div>
      </main>
    </div>
  );
};

export default SearchPage;
