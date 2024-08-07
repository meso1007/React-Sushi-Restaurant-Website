// ScrollFadeIn.js
import React, { useEffect } from "react";
import anime from "animejs/lib/anime.es.js";

function ScrollFadeIn({ children }) {
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll(".scroll-item");
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
          anime({
            targets: el,
            opacity: [0, 1],
            translateY: [20, 0],
            easing: "easeOutExpo",
            duration: 1000,
          });
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return <div className="scroll-item-container">{children}</div>;
}

export default ScrollFadeIn;
