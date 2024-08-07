import React from "react";

const AboutSection = ({ title, paragraphs, bgColor }) => {
  const backgroundColorClass = bgColor === "black" ? "bg-black" : "bg-gray-100";
  const textColorClass = bgColor === "black" ? "text-white" : "text-gray-700";

  return (
    <section
      className={`py-16 ${backgroundColorClass} ${textColorClass} text-center`}
    >
      <div className="container mx-auto">
        {title && <h2 className="text-3xl font-bold mb-6">{title}</h2>}
        {paragraphs &&
          paragraphs.map((paragraph, index) => (
            <p key={index} className="text-lg mb-4">
              {paragraph}
            </p>
          ))}
      </div>
    </section>
  );
};

export default AboutSection;
