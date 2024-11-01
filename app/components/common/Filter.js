'use client';
import React, { useState } from 'react';

const Filter = ({ filter, setFilter }) => {
  const [activeTab, setActiveTab] = useState(filter);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    setFilter(tab);
  };

  return (
    <div className="flex justify-center">
      <div className="flex max-w-2xl bg-white rounded-2xl relative">
        <div
          className={`absolute inset-0 bg-gray-200 rounded-2xl transition-all duration-300 ${
            activeTab === ''
              ? 'left-0 right-3/4'
              : activeTab === 'rating'
              ? 'left-1/4 right-1/2'
              : activeTab === 'high-to-low'
              ? 'left-1/2 right-1/4'
              : 'left-3/4 right-0'
          }`}
        ></div>
        <button
          className={`py-4 px-4 text-[18px] font-normal font-lato focus:outline-none rounded-l-2xl border-2 border-r-0 border-black relative z-10`}
          onClick={() => handleTabClick('')}
        >
          No Filter
        </button>
        <button
          className={`py-4 px-4 text-[18px] font-normal font-lato focus:outline-none border-t-2 border-b-2 border-black relative z-10`}
          onClick={() => handleTabClick('rating')}
        >
          Something
        </button>
        <button
          className={`py-4 px-4 text-[18px] font-normal font-lato focus:outline-none border-t-2 border-b-2 border-black relative z-10`}
          onClick={() => handleTabClick('high-to-low')}
        >
          Something
        </button>
        <button
          className={`py-4 px-4 text-[18px] font-normal font-lato focus:outline-none rounded-r-2xl border-2 border-l-0 border-black relative z-10`}
          onClick={() => handleTabClick('low-to-high')}
        >
          Something
        </button>
      </div>
    </div>
  );
};

export default Filter;