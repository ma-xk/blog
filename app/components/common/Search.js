'use client';
import React from 'react';
import searchIcon from '../../assets/svgs/search.svg';
import Image from 'next/image';

const Search = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className='flex items-center bg-clean rounded-2xl border w-full border-black p-2'>
      <Image
        src={searchIcon}
        alt='Search Icon'
        className='w-8 h-8 text-gray-400 ml-2 mr-1'
      />
      <input
        type='text'
        placeholder='Search...'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className='  pl-1 pr-4  rounded-3xl w-full focus:outline-none font-lato text-lg'
      />
    </div>
  );
};

export default Search;
