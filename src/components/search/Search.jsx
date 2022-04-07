import React from 'react';

const Search = ({ placeholder, value, onChange, onSearch, inputBg }) => {
  return (
    <div className={`flex w-full ${inputBg} rounded-md`}>
      <input
        className="flex-1 w-full px-3 py-2 text-gray-700 bg-transparent border-0 outline-none placeholder:text-gray-700 placeholder:text-sm"
        type="text"
        onChange={onChange}
        placeholder={placeholder ?? 'Search for free photos'}
        value={value}
      />

      <button
        className="flex flex-col items-center justify-center flex-shrink-0 px-4"
        onClick={onSearch}
      >
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
  );
};

export default Search;
