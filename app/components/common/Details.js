// GenericDetails.js
'use client';
import React, { useState, useEffect } from 'react';

async function getData(url) {
  const res = await fetch(url, {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'GET',
  });

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

const Details = ({ params, url }) => {
  const [details, setDetails] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getData(url);
        const item = data.find((m) => m.slug === params.slug);
        if (item) {
          setDetails(item);
        } else {
          throw new Error('Item not found');
        }
      } catch (error) {
        console.error(error);
        setDetails(null);
      }
    };

    fetchData();
  }, [params.slug, url]);

  if (!details) {
    return <div>Item not found.</div>;
  }

  return (
    <div className="container mx-auto">
      <div className="flex justify-center">
        <div className="w-full">
          <h1>{details.name}</h1>
          <div>{details.eligibility}</div>
        </div>
      </div>
    </div>
  );
};

export default Details;