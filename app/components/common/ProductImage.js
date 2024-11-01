'use client';

import React from 'react';
import MissingProductImage from '@/app/assets/svgs/MissingProduct.svg';

const ProductImage = ({ src, alt }) => {
  return (
    <img
      src={src}
      onError={(e) => {
        e.target.onerror = null;
        e.target.src = MissingProductImage;
      }}
      alt={alt}
    />
  );
};

export default ProductImage;