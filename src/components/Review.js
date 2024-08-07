import React, { useEffect, useRef, useState } from "react";
import ReviewCard from "../layouts/ReviewCard";
import "../css/Review.css";

const Review = (props) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);
  const reviews = props.reviews;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.1,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div
      id="reviews"
      ref={ref}
      className={`min-h-screen flex flex-col items-center justify-center md:px-32 px-5 ${
        isVisible ? "animate" : ""
      }`}
    >
      <h1 className="text-4xl font-semibold text-center lg:pt-16 pt-24 pb-10">
        Our Reviews
      </h1>
      <div className="w-full max-w-6xl overflow-x-auto">
        <div className="flex flex-nowrap gap-2">
          {reviews.map((review, idx) => (
            <div
              key={idx}
              className={`flex-shrink-0 w-1/3 slide-in ${
                isVisible ? "animate" : ""
              }`}
              style={{ animationDelay: `${idx * 0.3}s ` }} // Staggered delay
            >
              <ReviewCard
                img={review.img}
                name={review.name}
                text={review.text}
                rating={review.rating}
                bestDish={review.bestDish}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Review;
