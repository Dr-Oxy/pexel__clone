import './hero.css';

import React, { useContext } from 'react';

import { useNavigate } from 'react-router-dom';

import { AppContext } from '../../context/AppContext';
import Search from '../search/Search';

const Hero = () => {
  const { onChangeHandler, heroText, onHeroSearch } = useContext(AppContext);

  const navigate = useNavigate();
  return (
    <section className="flex flex-col justify-center mx-5 text-white hero__section md:mx-auto">
      <h1 className="mb-4 text-4xl font-bold lg:text-3xl ">
        The best free stock photos, royalty free images & videos shared by
        creators.
      </h1>

      <form className="w-full bg-black-100">
        <div className="">
          <Search
            inputBg="bg-white"
            value={heroText}
            onChange={onChangeHandler}
            onSearch={() => {
              onHeroSearch();
              navigate(`/search/${heroText}`);
            }}
            placeholder="Search for free photos and videos"
          />
        </div>
      </form>

      <div className="mt-2 hero__suggestion">
        <ul className="word__list">
          <li className="font-semibold ">Suggested:</li>

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
