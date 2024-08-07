// src/pages/About.js
import React from "react";
import Main from "../components/Main";
import IMGAboutSection from "../components/IMGAboutSection";
import SlideInSection from "../components/SlideInSection";

const About = () => {
  const title1 = "About Us";
  const paragraphs1 = [
    "Welcome to SUPER SUSHI, where tradition meets innovation. Established in [Year]",
    "SUPER SUSHI has been dedicated to bringing the finest sushi experience to the heart of Vancouver",
    "Our restaurant combines the elegance of traditional Japanese techniques with modern culinary creativity to offer an unforgettable dining experience.",
  ];
  const title2 = "History";
  const paragraphs2 = [
    "Welcome to SUPER SUSHI, where tradition meets innovation. Established in [Year]",
    "SUPER SUSHI has been dedicated to bringing the finest sushi experience to the heart of Vancouver",
    "Our restaurant combines the elegance of traditional Japanese techniques with modern culinary creativity to offer an unforgettable dining experience.",
  ];

  return (
    <>
      <Main
        title={"About"}
        textPosition="left"
        isVideo={false}
        img={"Assets/about1.jpg"}
      />
      <div className="py-16 min-h-screen bg-black p-8">
        <SlideInSection>
          <IMGAboutSection
            title={title1}
            paragraphs={paragraphs1}
            img={"Assets/sushiabout.jpg"}
            bgColor={"black"}
            isImgRight={false}
          />
        </SlideInSection>
        <SlideInSection>
          <IMGAboutSection
            title={title2}
            paragraphs={paragraphs2}
            img={"Assets/sushiabout.jpg"}
            bgColor={"black"}
          />
        </SlideInSection>
      </div>
    </>
  );
};

export default About;
