import React from "react";

const IMGAboutSection = ({
  title,
  paragraphs,
  img,
  imgalt = "img",
  isImgRight = true,
  bgColor,
}) => {
  const backgroundColorClass = bgColor === "black" ? "bg-black" : "bg-gray-100";
  const textColorClass = bgColor === "black" ? "text-white" : "text-gray-700";
  return (
    <section className={`${backgroundColorClass} ${textColorClass} py-8`}>
      <div className="flex flex-col md:flex-row items-center mb-12">
        {!isImgRight && (
          <div className="md:w-1/2 mt-4 md:mt-0 md:mr-8">
            <img
              src={img}
              alt={imgalt}
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
        )}
        <div className="md:w-1/2 md:pr-8">
          {title && (
            <h2 className="text-3xl font-bold mb-6 text-center">{title}</h2>
          )}
          {paragraphs &&
            paragraphs.map((paragraph, index) => (
              <p key={index} className="text-lg mb-4">
                {paragraph}
              </p>
            ))}
        </div>
        {isImgRight && (
          <div className="md:w-1/2 mt-4 md:mt-0 md:ml-8">
            <img
              src={img}
              alt={imgalt}
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default IMGAboutSection;
