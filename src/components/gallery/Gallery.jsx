import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './gallery.css';
import Masonry from '../masonry/Masonry';

const Gallery = () => {
  const [photos, setPhotos] = useState([]);

  const apiKey = '563492ad6f91700001000001f47da55ffcf845c5b3fbbbde31823888';

  const baseURL = 'https://api.pexels.com/v1/curated?per_page=12';

  // Api calls
  useEffect(() => {
    getPhotos();
  }, []);

  const getPhotos = async () => {
    try {
      const res = await axios.get(baseURL, {
        headers: {
          Authorization: apiKey,
          Accept: 'application/json',
        },
      });

      // console.log('res:', res, 'res.status:', res.status, 'data:', res.data);

      const data = await res.data;

      setPhotos(data.photos);
    } catch (err) {
      return console.log(err);
    }
  };

  console.log(photos);

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

        <section className=" gallery__grid text-white"></section>
        <Masonry photos={photos} />
      </section>
    </main>
  );
};

export default Gallery;
