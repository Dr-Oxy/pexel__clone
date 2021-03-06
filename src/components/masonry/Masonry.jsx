import './masonry.css';

import { useContext } from 'react';

import PhotoContainer from '../photo/PhotoContainer';
import { AppContext } from '../../context/AppContext';

const Masonry = () => {
  const { photoColumns } = useContext(AppContext);
  return (
    <div className="masonry">
      {photoColumns.map((photoColumn, id) => (
        <div className="photo__column" key={id}>
          {photoColumn.map((photo) => (
            <PhotoContainer photo={photo} key={photo.id} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Masonry;
