import './masonry.css';

import { useEffect, useState } from 'react';

import PhotoContainer from '../photo/PhotoContainer';

const Masonry = ({ photos }) => {
  const [columns, setColumns] = useState(3);

  //write a function that splits the array into columns
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

  //When the browser is resized, it still fires the column order change
  useEffect(() => {
    window.addEventListener('resize', columnOrder);
  }, []);

  const photoColumns = chunkArrayInColumn(photos, columns);

  return (
    <div className="masonry">
      {photoColumns.map((photoColumn, index) => (
        <div className="photo__column" key={index}>
          {photoColumn.map((photo) => (
            <PhotoContainer photo={photo} key={photo.id} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Masonry;
