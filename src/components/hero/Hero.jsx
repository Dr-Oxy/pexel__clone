import React from 'react';
import './hero.css';

const Hero = () => {
  return (
    <section className="hero__section py-20 mx-5 md:mx-auto">
      <h1 className="font-bold text-3xl mb-4 ">
        The best free stock photos, royalty free images & videos shared by
        creators.
      </h1>

      <form className="bg-black-100">
        <div className="hero__search  bg-white rounded-md flex justify-between items-center py-2 px-3 ">
          <input
            className="border-0 outline-none w-3/4"
            type="search"
            name="search"
            id="search"
            placeholder="Search for free photos and videos"
          />

          <button className="flex justify-end w-1/4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
            </svg>
          </button>
        </div>
      </form>

      <div className="hero__suggestion mt-2">
        <ul className="word__list">
          <li className=" font-semibold">Suggested:</li>

          <li>
            <a href="#design">design,</a>
          </li>
          <li>
            <a href="#hd">hd wallpaper,</a>
          </li>
          <li>
            <a href="#bg">background texture,</a>
          </li>
          <li>
            <a href="#desktop">desktop backgrounds,</a>
          </li>
          <li>
            <a href="#more">more</a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Hero;
