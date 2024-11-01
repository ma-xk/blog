'use client';
import React, { useEffect, useState } from 'react';
import Text from './text/text';
import Button from './Button';
import LoadingAnimation from './LoadingAnimation';

const PageDetails = ({ endpoint, params, notFoundMessage }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  // Async function to fetch data from the endpoint
  const fetchData = async () => {
    try {
      const res = await fetch(endpoint);
      if (!res.ok) {
        throw new Error(`Failed to fetch data. Please try again later.`);
      }
      return res.json();
    } catch (error) {
      throw new Error(`Error fetching data: ${error.message}`);
    }
  };

  useEffect(() => {
    const getData = async () => {
      try {
        const fetchedData = await fetchData();
        console.log('Fetched data:', fetchedData);
        const item = fetchedData.find((p) => p.slug === params.slug);
        if (item) {
          setData(item);
        } else {
          throw new Error('Data not found.');
        }
      } catch (error) {
        console.error(error);
        // Handle error state here if needed
      } finally {
        setLoading(false);
      }
    };
    // Call the async function
    getData();
  }, [endpoint, params.slug]);

  if (loading) {
    return <LoadingAnimation />;
  }

  if (!data) {
    return <div>{notFoundMessage}</div>;
  }

  const {
    name,
    category,
    description,
    link,
    img,
    price,
    rating,
    ratings,
    brand,
    about,
    manufacturer,
    asin,
  } = data;

  return (
    <div className='container mx-auto px-4 py-8'>
      <div className='flex flex-col md:flex-row'>
        <div className='md:w-1/3 mb-8 md:mb-0 md:pr-8'>
          <div className='w-full h-96 rounded-lg bg-[#FFFFFF] overflow-hidden flex items-center justify-center py-8'>
            <img
              src={img}
              alt={name}
              className='max-w-full max-h-full object-contain'
              onError={(e) => {
                e.target.onerror = null;
                e.target.src =
                  'https://fsa-fresh.s3.amazonaws.com/amazon-products/MissingProduct.svg';
              }}
            />
          </div>
        </div>
        <div className='md:w-2/3'>
          <h1 className='text-3xl font-bold mb-4'>{name}</h1>
          <div className='mb-6'>
            <h2>Description</h2> <br></br>
            <Text text={description} />
          </div>
          <p className='text-gray-600 mb-4'>{category}</p>
          <div className='mb-6'>
            <h2>Is {name} fsa eligible?</h2> <br></br>
            <h3>Yes! {name} is an fsa eligible product.</h3>
          </div>

          {(price || rating) && (
            <div className='flex items-center mb-6'>
              {price && (
                <span className='text-3xl font-bold mr-4'>${price}</span>
              )}
              {rating && (
                <span className='text-gray-600'>
                  Rating: {rating} ({ratings} ratings)
                </span>
              )}
            </div>
          )}
          {brand && (
            <div className='mb-4'>
              <span className='font-bold'>Brand:</span> {brand}
            </div>
          )}
          {about && (
            <div className='mb-4'>
              <span className='font-bold'>About:</span> {about}
            </div>
          )}
          {manufacturer && (
            <div className='mb-4'>
              <span className='font-bold'>Manufacturer:</span> {manufacturer}
            </div>
          )}
          {asin && (
            <div className='mb-4'>
              <span className='font-bold'>ASIN:</span> {asin}
            </div>
          )}
          {link && (
            <div>
              <Button text='Buy on Amazon' href={link} style='amazon' />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PageDetails;
