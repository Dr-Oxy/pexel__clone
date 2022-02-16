/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef, useState } from 'react';
import './App.css';
import Nav from './components/nav/Nav';
import Header from './components/header/Header';
import Gallery from './components/gallery/Gallery';

import axios from 'axios';

let pageIndex = 1;
const apiKey = '563492ad6f91700001000001f47da55ffcf845c5b3fbbbde31823888';

function App() {
  const [photos, setPhotos] = useState([]);

  const [searchText, setSearchText] = useState('');

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

  // Search Functionality

  const onChange = (e) => {
    setSearchText(e.target.value);
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
    <div className="App">
      <Nav searchText={searchText} onChange={onChange} />
      <Header searchText={searchText} onChange={onChange} />
      <Gallery photos={photos} targetRef={targetRef} />
    </div>
  );
}

export default App;
