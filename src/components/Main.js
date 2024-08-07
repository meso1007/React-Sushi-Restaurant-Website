import React from "react";
import ScrollFadeIn from "./ScrollFadeIn";

const Main = ({ title, p, isVideo = true, img, textPosition = "center" }) => {
  return (
    <main
      className={`relative h-screen flex items-center justify-${textPosition} text-${textPosition}`}
    >
      {isVideo && (
        <div
          className={`video-container absolute top-0 left-0 w-full h-full ${
            textPosition === "center" ? "z-0" : ""
          }`}
        >
          <video
            className="w-full h-full object-cover"
            src="./Assets/bg-sushi.mp4"
            autoPlay
            loop
            muted
          />
        </div>
      )}
      {!isVideo && (
        <img
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          src={img}
          alt="Background"
        />
      )}

      <div className="relative z-10 ">
        <h2 className="main-title text-6xl sm:text-9xl font-bold mb-4 text-white">
          {title}
        </h2>
        <p className="main-title text-4xl text-white">{p}</p>
      </div>
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-0"></div>
      <ScrollFadeIn />
    </main>
  );
};

export default Main;
