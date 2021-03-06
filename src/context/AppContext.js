/* eslint-disable react-hooks/exhaustive-deps */
import React, { createContext, useEffect, useRef, useState } from 'react';

import axios from 'axios';

export const AppContext = createContext();

let pageIndex = 1;
const apiKey = '563492ad6f91700001000001f47da55ffcf845c5b3fbbbde31823888';

export const AppProvider = (props) => {
  const [photos, setPhotos] = useState([]);

  const [columns, setColumns] = useState(3);

  const [heroText, setHeroText] = useState('');

  const [navText, setNavText] = useState('');

  const [searchResults, setSearchResults] = useState([]);

  const [sticky, setSticky] = useState(false);

  const targetRef = useRef();

  // >>>>> Fetch photos <<<<<<
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

  // >>>>> Write a function that splits the array into columns
  const chunkArrayInColumn = (arr, numOfColumns) => {
    let column = 0;

    // Creates a new array from the number of column array.
    let newArray = [];
    for (let i = 0; i < numOfColumns; i++) newArray.push([]);

    for (let item of arr) {
      newArray[column].push(item);
      column = column < numOfColumns - 1 ? column + 1 : 0;

      // if (column < numOfColumns - 1) {
      //   column += 1;
      // } else {
      //   column = 0;
      // }
    }

    return newArray;
  };

  //number of columns you want your images to be displayed in.
  const columnOrder = () => {
    if (window.matchMedia('(max-width: 1076px)').matches) {
      setColumns(2);
    } else {
      setColumns(3);
    }
  };

  // >>>>> When the browser is resized, it still fires the column order change <<<<
  useEffect(() => {
    window.addEventListener('resize', columnOrder);
  }, []);

  const photoColumns = chunkArrayInColumn(photos, columns);

  const searchColumns = chunkArrayInColumn(searchResults, columns);

  //>>>>> infinite scroll <<<<<<
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

  //>>>>> Search functionality <<<<<<
  const onChangeHandler = (e) => {
    setHeroText(e.target.value);
  };

  const onChanged = (e) => {
    setNavText(e.target.value);
  };

  const onHeroSearch = async () => {
    try {
      const res = await api.get(`/search?query=${heroText}&per_page=54`);
      const data = res.data;
      // setSearchResults((_searchResults) => [..._searchResults, ...data.photos]);
      setSearchResults(data.photos);
    } catch (err) {
      console.log(err);
    }

    setHeroText('');
  };

  const onNavSearch = async () => {
    try {
      const res = await api.get(`/search?query=${navText}&per_page=54`);
      const data = res.data;

      // setSearchResults((_searchResults) => [..._searchResults, ...data.photos]);
      setSearchResults(data.photos);
    } catch (err) {
      console.log(err);
    }

    setNavText('');
  };

  return (
    <AppContext.Provider
      value={{
        photos,
        targetRef,
        heroText,
        navText,
        photoColumns,
        onChangeHandler,
        onChanged,
        onHeroSearch,
        onNavSearch,
        searchResults,
        searchColumns,
        sticky,
        setSticky,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
