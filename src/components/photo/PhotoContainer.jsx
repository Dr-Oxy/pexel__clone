import React from 'react';
import './photo.css';

const PhotoContainer = ({ photo }) => {
  const photoBg = photo.avg_colour;

  return (
    <div className="photo__container relative">
      <img className="photo" src={photo.src.large} alt={photo.alt} />

      <div
        className="bottom__detail absolute bottom-0 w-full
       bg-black/2  py-4 px-3 flex md:justify-between items-center"
      >
        <div className="photographer hidden  text-white md:flex items-center">
          <div className="avatar bg-white w-6 h-6 rounded-full mr-2"></div>
          <p className="text-xs">Alexander MacQueen</p>
        </div>

        <div className="options flex ml-auto md:ml-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            width="24px"
            fill="#ffffff"
            version="1.1"
            x="0px"
            y="0px"
            viewBox="0 0 100 100"
            style={{ EnableBackground: 'new 0 0 100 100;' }}
          >
            <g>
              <path d="M72.2,43.2L58,57.4V17c0-2.2-1.8-4-4-4s-4,1.8-4,4v40.4L35.8,43.2c-1.6-1.6-4.1-1.6-5.7,0c-1.6,1.6-1.6,4.1,0,5.7l21,21   C52,70.7,53,71,54,71s2-0.4,2.8-1.2l21-21c1.6-1.6,1.6-4.1,0-5.7C76.3,41.6,73.8,41.6,72.2,43.2z"></path>
              <path d="M32,87h44c2.2,0,4-1.8,4-4s-1.8-4-4-4H32c-2.2,0-4,1.8-4,4S29.8,87,32,87z"></path>
            </g>
          </svg>

          <svg
            className="mx-3 hidden sm:block"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="#ffffff"
            viewBox="0 0 24 24"
          >
            <path d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path>
          </svg>

          <svg
            className="hidden sm:block"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="#ffffff"
            viewBox="0 0 24 24"
          >
            <path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default PhotoContainer;
