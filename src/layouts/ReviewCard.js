import React from "react";
import { BsStarFill, BsStarHalf } from "react-icons/bs";

const ReviewCard = ({ text, img, name, rating, bestDish }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg bg-white border-2 border-lightText p-4 rounded-lg shadow-md relative z-10">
      <div className="flex flex-col sm:flex-row items-center mb-4 gap-4">
        <img className="rounded-full w-1/3 sm:w-1/4" src={img} alt="Review" />
        <div className="text-center sm:text-left">
          <h3 className="text-xl font-semibold mb-2">{name}</h3>
          <div className="flex flex-row justify-center sm:justify-start mb-4">
            {[...Array(fullStars)].map((_, index) => (
              <BsStarFill key={index} className="text-brightcolor" />
            ))}
            {hasHalfStar && <BsStarHalf className="text-brightcolor" />}
            {[...Array(emptyStars)].map((_, index) => (
              <BsStarFill
                key={index + fullStars + (hasHalfStar ? 1 : 0)}
                className="text-gray-300"
              />
            ))}
          </div>
        </div>
      </div>
      <div className="mb-4">
        <p className="text-lightText text-sm">{text}</p>
      </div>
      {bestDish && (
        <div className="mt-4 pt-4 border-t border-gray-300">
          <h4 className="text-lg font-semibold mb-2">What I Recommend:</h4>
          <p className="text-gray-700 text-sm">{bestDish}</p>
        </div>
      )}
    </div>
  );
};

export default ReviewCard;
