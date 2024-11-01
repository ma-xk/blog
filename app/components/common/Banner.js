'use client';
import React, { useState, useEffect } from 'react';

const Banner = ({ breadcrumbs, title, description, date }) => {
  const [isBannerVisible, setIsBannerVisible] = useState(true);
  const [isScrollingUp, setIsScrollingUp] = useState(false);

  useEffect(() => {
    let prevScrollPos = window.pageYOffset;

    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const scrollingUp = prevScrollPos > currentScrollPos;
      setIsScrollingUp(scrollingUp);
      setIsBannerVisible(currentScrollPos === 0 || !scrollingUp);
      prevScrollPos = currentScrollPos;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className={`py-8 bg-gradient-to-b from-yellow to-white border-y-8 border-black z-10 sticky top-0 ${
        isBannerVisible ? '' : 'banner-hidden'
      }`}
    >
      <div className="container mx-auto text-center px-4">
        {title && <h1 className="mt-2 text-2xl font-bold">{title}</h1>}
        {description && <h2 className="mt-2">{description}</h2>}
        {date && <p className="mt-2">{date}</p>}
      </div>
    </div>
  );
};

export default Banner;