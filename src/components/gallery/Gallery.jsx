import React from 'react';
import './gallery.css';

const Gallery = () => {
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
        </div>

        <div className="gallery__title__dropdown absolute right-8 left-auto w-40 z-10 border-r-2">
          <div className="dropdown__pointer absolute left-auto  bg-white -z-10 h-3.5 w-3.5 rotate-45 "></div>

          <div className="dropdown__menu bg-white text-black py-2 ">
            <a className="active__menu" href="#trending">
              Trending
            </a>
            <a href="#new">New</a>
          </div>
        </div>

        <section className=" gallery__grid bg-red-500 ">
          <div className="gallery__photo bg-green-400  a">a</div>
          <div className="gallery__photo bg-white b">b</div>
          <div className="gallery__photo bg-purple-800 c">c</div>
          <div className="gallery__photo bg-yellow-900 d">d</div>
          <div className="gallery__photo bg-red-400 e">e</div>
          <div className="gallery__photo bg-pink-600 f">f</div>
          <div className="gallery__photo bg-blue-600 c">d</div>
          <div className="gallery__photo bg-rose-400 a">e</div>
          <div className="gallery__photo bg-gray-500 d">f</div>
        </section>
      </section>
    </main>
  );
};

export default Gallery;
