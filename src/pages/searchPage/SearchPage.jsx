import React, { useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import { useParams } from 'react-router-dom';

import Nav from '../../components/nav/Nav';
import SearchMasonry from '../../components/searchMasonry/SearchMasonry';

const SearchPage = () => {
  const { targetRef } = useContext(AppContext);

  let { value } = useParams();

  return (
    <div className="search">
      <Nav className="flex items-center gap-4 py-2 px-3 fixed top-0 left-0 z-20 w-full bg-gray-800" />

      <main className="search__layout py-4 px-4 md:px-8 mt-12">
        <h1 className="capitalize font-bold text-2xl text-black  my-7">
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
