// Carousel.js
'use client';
import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import '../routes/homepage/Testimonials.css';
import Card from './Card';

function Carousel({ testimonials }) {
  const [emblaRef] = useEmblaCarousel(
    {
      dragFree: true,
      loop: false,
    },
    [Autoplay()]
  );

  return (
    <div className="carousel container" ref={emblaRef}>
      <div className="flex">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="embla__slide">
            <Card
              variant="review-card"
              name={testimonial.name}
              image={testimonial.image}
              rating={testimonial.rating}
              review={testimonial.review}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Carousel;