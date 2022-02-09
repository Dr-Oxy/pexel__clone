/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Hero from '../hero/Hero';
import './header.css';

const Header = () => {
  return (
    <header className="header bg-gray-300">
      <nav className="bg-gray-700 flex items-center justify-between py-2 px-3">
        <div className="flex-1 flex justify-between items-center">
          <div className="logo flex items-center justify-center">
            <svg
              className="rounded-md"
              xmlns="http://www.w3.org/2000/svg"
              width="40px"
              height="40px"
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
            <span className="hidden md:inline md:ml-2 text-white">Pexels</span>
          </div>

          <div className="nav__search flex-1 bg-white rounded-md flex justify-between items-center py-2 px-3 mx-3 md:ml-6">
            <input
              className="border-0 outline-none bg-transparent"
              type="search"
              name="search"
              id="search"
              placeholder="search for free photos"
            />

            <button className="flex flex-col items-center justify-center">
              <svg
                className=""
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
              </svg>
            </button>
          </div>
        </div>

        <ul className="nav__links text-white capitalize flex items-center font-semibold text-sm">
          <li className="hidden lg:block">
            <a href="">explore</a>
          </li>
          <li className="hidden lg:block">
            <a href="">license</a>
          </li>
          <li className="hidden lg:block">
            <a href="">upload</a>
          </li>
          <li className="hidden md:block">
            <a href="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="#fff"
              >
                <path d="M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
              </svg>
            </a>
          </li>

          <li className="hidden md:block">
            <button className="cta__btn  capitalize font-semibold rounded-md">
              join
            </button>
          </li>

          <li className="md:hidden">
            <button className=" flex flex-col items-center justify-center border-0 outline-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="#fff"
              >
                <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path>
              </svg>
            </button>
          </li>
        </ul>
      </nav>

      <Hero />
    </header>
  );
};

export default Header;
