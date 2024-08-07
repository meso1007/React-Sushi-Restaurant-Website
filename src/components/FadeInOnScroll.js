import React, { useEffect, useState } from "react";

const FadeInOnScroll = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("fadeInElement");
      const { top, bottom } = element.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      if (top < viewportHeight && bottom > 0) {
        setIsVisible(true);
      }
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="content">
      <div
        id="fadeInElement"
        className={`fade-in ${isVisible ? "visible" : ""}`}
      >
        スクロールしてこの要素が表示されるのを確認してください。
      </div>
    </div>
  );
};

export default FadeInOnScroll;
