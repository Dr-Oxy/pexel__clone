import './nav.css';

import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { AppContext } from '../../context/AppContext';
import Search from '../search/Search';

const Nav = ({ className, opacity, text, hover, inputBg, fill }) => {
  const { onChanged, navText, onNavSearch } = useContext(AppContext);

  const navigate = useNavigate();

  return (
    <nav className={className}>
      <Link to="/">
        <div className="logo flex items-center justify-center">
          <svg
            className="rounded-md"
            xmlns="http://www.w3.org/2000/svg"
            width="44px"
            height="44px"
            viewBox="0 0 32 32"
          >
            <path
              d="M2 0h28a2 2 0 0 1 2 2v28a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2z"
              fill="#05A081"
            ></path>
            <path
              d="M13 21h3.863v-3.752h1.167a3.124 3.124 0 1 0 0-6.248H13v10zm5.863 2H11V9h7.03a5.124 5.124 0 0 1 .833 10.18V23z"
              fill="#fff"
            ></path>
          </svg>
          <span className="hidden md:inline md:ml-3 text-white font-semibold">
            Pexels
          </span>
        </div>
      </Link>

      <div
        className={`search-wrap w-full flex-1
          ${opacity}
        `}
      >
        <Search
          inputBg={inputBg}
          value={navText}
          onChange={onChanged}
          onSearch={() => {
            onNavSearch();
            navigate(`/search/${navText}`);
          }}
        />
      </div>

      <ul
        className={`nav__links capitalize flex items-center font-semibold text-sm ml-auto md:space-x-5 ${text} ${hover}`}
      >
        <li className="hidden lg:block">
          <a href="#explore">explore</a>
        </li>
        <li className="hidden lg:block">
          <a href="#license">license</a>
        </li>
        <li className="hidden lg:block">
          <a href="#upload">upload</a>
        </li>
        <li className="hidden md:block">
          <a className={fill} href="#profile">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
            </svg>
          </a>
        </li>

        <li className="hidden md:block ">
          <button className="cta__btn  capitalize font-semibold rounded-md text-white">
            join
          </button>
        </li>

        <li className="md:hidden">
          <button
            className={`flex flex-col items-center justify-center border-0 outline-none ${fill}`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
            >
              <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path>
            </svg>
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
