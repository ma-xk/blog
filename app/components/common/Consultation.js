import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import footLogo from '../../assets/svgs/foot-logo.svg';

function Consultation() {
  return (
    <div className='bg-white shadow-lg rounded-lg p-4 md:flex md:items-center md:justify-between flex-col md:flex-row'>
      <div className='flex items-center mb-4 md:mb-0'>
        <div className=''>
          <Image src={footLogo} alt='Foot Logo' className='max-w-[50px]'/>
        </div>
        <div className='max-w-xl pl-10'>
          <h2 className='text-2xl font-semibold text-violet-950'>
            Consultation CTA <span className='text-lime-500'>Copy</span>
          </h2>
          <p className='text-gray-600'>
            Our online training immerses employees in real-world scenarios for
            immediate application and enhanced skill retention. 
          </p>
        </div>
      </div>
      <div className='w-full md:w-auto'>
        <button className='bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded w-full md:w-auto'>
          Contact&nbsp;Us
        </button>
      </div>
    </div>
  );
}

export default Consultation;
