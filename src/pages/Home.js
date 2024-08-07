import React from "react";
import Main from "../components/Main";
import AboutSection from "../components/AboutSection";
import Review from "../components/Review";
import SlideInSection from "../components/SlideInSection";

const Home = () => {
  const para = [
    "Experience exceptional dining in a welcoming atmosphere.",
    "Discover gourmet flavors and a memorable experience with us.",
  ];

  const reviews = [
    {
      text: "Amazing food and great atmosphere! The best dining experience I have ever had.",
      img: "./Assets/customer/customer1.jpg",
      name: "John Doe",
      bestDish: "Spicy Grilled Chicken",
      rating: 4.5,
    },
    {
      text: "The service was exceptional and the dishes were absolutely delicious.",
      img: "./Assets/customer/customer2.jpg",
      name: "Jane Smith",
      rating: 5,
      bestDish: "Spicy Grilled Chicken",
    },
    {
      text: "A wonderful experience from start to finish. Highly recommend it!",
      img: "./Assets/customer/customer3.jpg",
      name: "Emily Johnson",
      rating: 4,
      bestDish: "Spicy Grilled Chicken",
    },
    // {
    //   text: "Amazing food and great atmosphere! The best dining experience I have ever had.",
    //   img: "/assets/customer/customer4.jpg",
    //   name: "John Doe",
    //   bestDish: "Spicy Grilled Chicken",
    //   rating: 4.5,
    // },

    // {
    //   text: "A wonderful experience from start to finish. Highly recommend it!",
    //   img: "/assets/customer/customer5.jpg",
    //   name: "Emily Johnson",
    //   rating: 4,
    //   bestDish: "Spicy Grilled Chicken",
    // },
  ];

  return (
    <div className="text-center">
      <Main title={"SUPER SUSHI"} p={"Vancouver, BC"} />
      <AboutSection
        title="WHAT IS SUPER SUSHI?"
        paragraphs={para}
        bgColor={"black"}
      />
      <SlideInSection />
      <div className="py-16 text-center">
        <Review reviews={reviews} />
      </div>
    </div>
  );
};

export default Home;
