"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

const Card = ({
  title,
  subtitle,
  eligibility,
  slug,
  linkPrefix,
  image,
  price,
  rating,
  ratings,
  variant,
  review,
  name,
  singleDestination,
}) => {
  const truncatedTitle = title
    ? title.length > 50
      ? title.slice(0, 50) + "..."
      : title
    : "";
  const isCategoryBanner = variant === "category-banner";
  const isReviewCard = variant === "review-card";
  const hasLink = singleDestination !== "none";

  if (isCategoryBanner) {
    const linkComponent = hasLink ? (
      <Link href={singleDestination || `/${linkPrefix}/${slug}`}>
        <div className="flex flex-col items-center justify-center bg-clean border-4 border-black shadow-xl overflow-hidden transform transition-all hover:scale-105 duration-300 p-8 h-full">
          {image && (
            <div className="flex flex-col items-center text-center flex-grow">
              <h3 className="text-2xl font-bold mb-4" title={title}>
                {truncatedTitle}
              </h3>
              <img
                src={image}
                alt={title}
                height={100}
                className="object-contain h-40 w-40 py-8"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src =
                    "https://fsa-fresh.s3.amazonaws.com/amazon-products/MissingProduct.svg";
                }}
              />
            </div>
          )}
          <div className="flex flex-col items-center text-center flex-grow">
            {subtitle && <p className="text-xl mb-2">{subtitle}</p>}
            {eligibility && (
              <p className="text-lg text-indigo-500 font-semibold">
                {eligibility}
              </p>
            )}
            {price && <p className="text-lg font-semibold">${price}</p>}
            {rating && (
              <div className="flex items-center mb-2">
                <span className="text-gray-600">
                  Rating: {rating} ({ratings} ratings)
                </span>
              </div>
            )}
          </div>
        </div>
      </Link>
    ) : (
      <div className="flex flex-col items-center justify-center bg-clean border-4 border-black shadow-xl overflow-hidden transform transition-all hover:scale-105 duration-300 p-8 h-full">
        {image && (
          <div className="flex flex-col items-center text-center flex-grow">
            <h3 className="text-2xl font-bold mb-4" title={title}>
              {truncatedTitle}
            </h3>
            <img
              src={image}
              alt={title}
              height={100}
              className="object-contain h-40 w-40 py-8"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src =
                  "https://fsa-fresh.s3.amazonaws.com/amazon-products/MissingProduct.svg";
              }}
            />
          </div>
        )}
        <div className="flex flex-col items-center text-center flex-grow">
          {subtitle && <p className="text-xl mb-2">{subtitle}</p>}
          {eligibility && (
            <p className="text-lg text-indigo-500 font-semibold">
              {eligibility}
            </p>
          )}
          {price && <p className="text-lg font-semibold">${price}</p>}
          {rating && (
            <div className="flex items-center mb-2">
              <span className="text-gray-600">
                Rating: {rating} ({ratings} ratings)
              </span>
            </div>
          )}
        </div>
      </div>
    );

    return linkComponent;
  }

  if (isReviewCard) {
    return (
      <div className="bg-white p-4 md:p-8 lg:p-12 shadow-lg border-2 border-blue-500">
        <div className="flex flex-col md:flex-row items-center mb-4 md:mb-8">
          <div className="w-20 h-20 md:w-16 md:h-16 overflow-hidden">
            <Image
              src={image}
              alt={name}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="mt-4 md:mt-0 md:ml-8">
            <h4 className="text-3xl md:text-lg lg:text-xl font-bold text-blue-600">
              {name}
            </h4>
            <div className="flex items-center mt-2">
              {[...Array(rating)].map((_, i) => (
                <svg
                  key={i}
                  className="w-5 h-5 md:w-6 md:h-6 lg:w-8 lg:h-8 fill-current text-yellow-500"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
              ))}
            </div>
          </div>
        </div>
        <p className="text-gray-700 text-sm sm:text-base md:text-xl lg:text-xl overflow-hidden overflow-ellipsis h-[150px] md:h-[130px] lg:h-[170px]">
          {review}
        </p>
      </div>
    );
  }

  const linkComponent = hasLink ? (
    <Link href={singleDestination || `/${linkPrefix}/${slug}`}>
      <div className="flex flex-row items-center justify-between bg-clean border-0 shadow-xl overflow-hidden transform transition-all hover:scale-105 duration-300">
        <div className="flex flex-row gap-4 items-center w-full p-6">
          {image && (
            <div className="w-16 h-16 relative">
              <img
                src={image}
                alt={title}
                className="object-contain w-full h-full"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src =
                    "https://fsa-fresh.s3.amazonaws.com/amazon-products/MissingProduct.svg";
                }}
              />
            </div>
          )}
          <div className="flex flex-col flex-grow min-w-0">
            <h3 className="text-2xl font-bold mb-2" title={title}>
              {truncatedTitle}
            </h3>
            {eligibility && (
              <p className="text-lg text-indigo-500 font-semibold">
                {eligibility}
              </p>
            )}
            {price && <p className="text-lg font-semibold">${price}</p>}
            {rating && (
              <div className="flex items-center mb-2">
                <span className="text-gray-600">
                  Rating: {rating} ({ratings} ratings)
                </span>
              </div>
            )}
          </div>
        </div>
        <div className="bg-indigo-600 text-white py-2 px-4 mr-4 rounded-lg hover:bg-indigo-700 transition ease-in-out duration-150">
          View
        </div>
      </div>
    </Link>
  ) : (
    <div className="flex flex-row items-center justify-between bg-clean border-0 shadow-xl overflow-hidden transform transition-all hover:scale-105 duration-300">
      <div className="flex flex-row gap-4 items-center w-full p-6">
        {image && (
          <div className="w-16 h-16 relative">
            <img
              src={image}
              alt={title}
              className="object-contain w-full h-full"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src =
                  "https://fsa-fresh.s3.amazonaws.com/amazon-products/MissingProduct.svg";
              }}
            />
          </div>
        )}
        <div className="flex flex-col flex-grow min-w-0">
          <h3 className="text-2xl font-bold mb-2" title={title}>
            {truncatedTitle}
          </h3>
          {eligibility && (
            <p className="text-lg text-indigo-500 font-semibold">
              {eligibility}
            </p>
          )}
          {price && <p className="text-lg font-semibold">${price}</p>}
          {rating && (
            <div className="flex items-center mb-2">
              <span className="text-gray-600">
                Rating: {rating} ({ratings} ratings)
              </span>
            </div>
          )}
        </div>
      </div>
      <div className="bg-indigo-600 text-white py-2 px-4 mr-4 rounded-lg hover:bg-indigo-700 transition ease-in-out duration-150">
        View
      </div>
    </div>
  );

  return linkComponent;
};

export default Card;