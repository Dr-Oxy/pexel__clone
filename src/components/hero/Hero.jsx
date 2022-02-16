import React from 'react';
import './hero.css';
import Search from '../search/Search';

const Hero = () => {
  return (
    <section className="hero__section flex flex-col justify-center mx-5 md:mx-auto text-white">
      <h1 className="font-bold text-4xl lg:text-3xl mb-4 ">
        The best free stock photos, royalty free images & videos shared by
        creators.
      </h1>

      <form className="bg-black-100 w-full">
        <div className="relative bg-red-500">
          <Search placeholder="Search for free photos and videos" />

          {/* <div className="search__dropdown h-60 bg-gray-500 "></div> */}
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
