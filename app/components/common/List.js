'use client';
import React, { Suspense, useState, useEffect } from 'react';
import Card from './Card';
import LoadingAnimation from './LoadingAnimation';
import Search from './Search';
import Filter from './Filter';

async function getData(url) {
  const res = await fetch(url, { cache: 'no-store' });
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
}

const List = ({
  url,
  linkPrefix,
  limit = Infinity,
  params,
  config,
  variant,
  showSearchAndFilter = true,
  singleDestination,
}) => {
  const [data, setData] = useState([]);
  const [categoriesData, setCategoriesData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const fetchedData = await getData(url);
      setData(fetchedData);
    };
    fetchData();
  }, [url]);

  useEffect(() => {
    const fetchCategoriesData = async () => {
      const fetchedCategories = await getData('https://6iu6usbauc.us-east-1.awsapprunner.com/amazon-categories');
      setCategoriesData(fetchedCategories);
    };
    fetchCategoriesData();
  }, []);

  let filteredData = data;

  if (config === 'category_page' && params && params.slug) {
    const category = categoriesData.find(
      (category) => category.slug === params.slug
    );
    if (category) {
      filteredData = data.filter(
        (item) => item.category_id === category.id
      );
    }
  } else if (config === 'product_page' && params && params.slug) {
    const productData = data.filter((item) => item.type === 'product');
    const currentProduct = productData.find(
      (product) => product.slug === params.slug
    );
    if (currentProduct) {
      filteredData = productData.filter(
        (product) =>
          product.category_id === currentProduct.category_id &&
          product.slug !== params.slug
      );
    }
  }

  // Filter data based on search term
  if (searchTerm) {
    filteredData = filteredData.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

  // Sort data based on filter option
  if (filter === 'high-to-low') {
    filteredData = filteredData.sort((a, b) => b.price - a.price);
  } else if (filter === 'low-to-high') {
    filteredData = filteredData.sort((a, b) => a.price - b.price);
  } else if (filter === 'rating') {
    filteredData = filteredData.sort((a, b) => b.rating - a.rating);
  } else {
    // Default option: Sort alphabetically by name
    filteredData = filteredData.sort((a, b) => a.name.localeCompare(b.name));
  }

  const limitedData = filteredData.slice(0, limit);

  return (
    <div>
      <div
        className={`lg:container ${
          variant === 'category-banner' ? 'justify-center' : ''
        }`}
      >
        {showSearchAndFilter && (
          <div className='py-8 flex flex-col md:flex-row gap-2 md:gap-5'>
            <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            <Filter filter={filter} setFilter={setFilter} />
          </div>
        )}
         <div className='flex flex-wrap'>
        {limitedData.map((item) => (
          <Suspense key={item.id} fallback={<LoadingAnimation />}>
            <div className={`w-full my-2 py-3 ${variant === 'category-banner' ? 'md:w-1/2 lg:w-1/3 px-4' : ''}`}>
                <Card
                  title={item.name}
                  subtitle={item.subtitle}
                  eligibility={item.eligibility}
                  slug={item.slug}
                  linkPrefix={linkPrefix}
                  image={`${item.img}?v=${Date.now()}`}
                  price={item.price}
                  rating={item.rating}
                  ratings={item.ratings}
                  variant={variant}
                  singleDestination={singleDestination}
                />
              </div>
            </Suspense>
          ))}
        </div>
      </div>
    </div>
  );
};

export default List;