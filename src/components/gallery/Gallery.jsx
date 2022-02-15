import './gallery.css';

/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef, useState } from 'react';

import Masonry from '../masonry/Masonry';
import axios from 'axios';

let pageIndex = 1;
const apiKey = '563492ad6f91700001000001f47da55ffcf845c5b3fbbbde31823888';

const Gallery = () => {
  const [photos, setPhotos] = useState([]);

  const targetRef = useRef();

  //Fetch photos
  const api = axios.create({
    baseURL: 'https://api.pexels.com/v1/',
    headers: {
      Authorization: apiKey,
      Accept: 'application/json',
    },
  });

  // Api calls
  useEffect(() => {
    getPhotos(1);
  }, []);

  const getPhotos = async (index) => {
    try {
      const res = await api.get(`curated?page=${index}&per_page=15`);
      const data = res.data;
      //set photo state
      setPhotos((_photos) => [..._photos, ...data.photos]);
    } catch (err) {
      console.log(err);
    }
  };

  //infinite scroll
  const loadMorePhotos = async () => getPhotos((pageIndex += 1));

  // ComponentDidMount
  const options = { rootMargin: '0px', threshold: 0.5 };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && loadMorePhotos(),
      options,
    );
    observer.observe(targetRef.current);

    // ComponentDidUnmount or cleanup function
    return () => {
      observer.unobserve(targetRef.current);
    };
  }, []);

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

        <section className="photo__gallery text-white">
          <Masonry photos={photos} />

          <div ref={targetRef} className="load__btn text-center">
            <button className="mt-5 bg-gray-200 text-gray-600 py-2 px-3 ">
              Load More
            </button>
          </div>
        </section>
      </section>
    </main>
  );
};

export default Gallery;
