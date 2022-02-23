import React, { useContext } from 'react';

import { AppContext } from '../../context/AppContext';

import '../masonry/masonry.css';
import PhotoContainer from '../photo/PhotoContainer';

const SearchMasonry = () => {
  const { searchColumns } = useContext(AppContext);

  return (
    <div className="masonry">
      {searchColumns.map((photoColumn, id) => (
        <div className="photo__column" key={id}>
          {photoColumn.map((photo) => (
            <PhotoContainer photo={photo} key={photo.id} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default SearchMasonry;
