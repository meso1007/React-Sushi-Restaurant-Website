import React from "react";
import useIntersectionObserver from "./useIntersectionObserver";
import "../css/SlideInSection.css";

const SlideInSection = ({ children, key }) => {
  const [ref, isVisible] = useIntersectionObserver({
    threshold: 0.3,
  });

  return (
    <div
      ref={ref}
      key={key} // Add key here to trigger re-render
      className={`slide-in-element ${isVisible ? "slide-in-visible" : ""}`}
    >
      {children}
    </div>
  );
};
export default SlideInSection;
