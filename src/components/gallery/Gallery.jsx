import './gallery.css';

/* eslint-disable react-hooks/exhaustive-deps */
// import React, { useEffect, useRef, useState } from 'react';

import Masonry from '../masonry/Masonry';

const Gallery = ({ photos, targetRef }) => {
  return (
    <main className="gallery">
      <nav className="gallery__nav flex items-center justify-between md:justify-center whitespace-nowrap overflow-x-auto shadow-sm">
        <a className="gallery__active" href="#gallery">
          Home
        </a>
        <a href="#discover">Discover</a>
        <a href="#videos">Videos</a>
        <a href="#leader">Leaderboard</a>
        <a href="#challenges">Challenges</a>
      </nav>

      <section className="gallery__layout py-4 px-4 md:px-8">
        <div className="gallery__title mb-2 flex justify-between items-center relative">
          <h6 className="title__text capitalize font-semibold">
            Free stock photos
          </h6>

          <div className="title__text__drop">
            <div className="title__select flex items-center justify-between cursor-pointer">
              <span className=" mr-3 font-semibold">Trending</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M7 10l5 5 5-5z"></path>
              </svg>
            </div>

            <div className="gallery__title__dropdown absolute right-0 left-auto top-10  w-36 z-10 border-r-2 bg-white">
              <div className="dropdown__pointer absolute right-10 left-auto -top-2  bg-white -z-10 h-3.5 w-3.5 rotate-45 "></div>
              <div className="dropdown__menu  text-black py-2 ">
                <a className="active__menu" href="#trending">
                  Trending
                </a>
                <a href="#new">New</a>
              </div>
            </div>
          </div>
        </div>

        <section className="photo__gallery text-white">
          <Masonry photos={photos} />

          <div ref={targetRef} className="load__btn text-center animate-spin">
            <img
              className="h-20 mx-auto"
              src="/spinner-icon.jpg"
              alt="loading spinner"
            />
          </div>
        </section>
      </section>
    </main>
  );
};

export default Gallery;
