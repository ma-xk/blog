import Link from 'next/link';
import React from 'react';

const CTACard = () => {
  return (
    <div className='bg-blue p-8 text-center'>
      <h2 className='text-3xl font-bold text-white mb-4'>Get More Done</h2>
      <h3 className='text-xl text-white mb-8'>Together With US</h3>
      <p className='text-white mb-8'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
      <Link href='/tools'>
        <button className='bg-white text-blue font-bold py-2 px-4 rounded transition duration-300 transform hover:scale-110'>
          Get Started
        </button>
      </Link>
    </div>
  );
};

export default CTACard;
