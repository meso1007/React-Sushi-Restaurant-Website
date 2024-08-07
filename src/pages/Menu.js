// src/components/Menu.js
import React, { useState } from "react";
import SlideInSection from "../components/SlideInSection";
const categories = ["All", "Sushi", "Sashimi", "Udon", "Tempura"];

const menuItems = [
  {
    category: "Sushi",
    name: "Spicy Tuna Roll",
    description: "A delicious roll with fresh tuna, spicy mayo, and cucumber.",
    price: "$12.00",
    img: "./Assets/dishes/sushi/salmon.jpg",
  },
  {
    category: "Sashimi",
    name: "Salmon Sashimi",
    description: "Fresh salmon sashimi served with soy sauce and wasabi.",
    price: "$15.00",
    img: "./Assets/dishes/sashimi/hotate.jpg",
  },
  {
    category: "Udon",
    name: "Tempura Udon",
    description: "Udon noodles in a savory broth topped with crispy tempura.",
    price: "$10.00",
    img: "./Assets/dishes/udon/udon1.jpg",
  },
  {
    category: "Sushi",
    name: "Spicy Tuna Roll",
    description: "A delicious roll with fresh tuna, spicy mayo, and cucumber.",
    price: "$12.00",
    img: "./Assets/dishes/sushi/salmon.jpg",
  },
  {
    category: "Tempura",
    name: "Tempura",
    description: "Crispy tempura.",
    price: "$20.00",
    img: "./Assets/dishes/tempura/tempura1.jpg",
  },
  {
    category: "Sashimi",
    name: "Salmon Sashimi",
    description: "Fresh salmon sashimi served with soy sauce and wasabi.",
    price: "$15.00",
    img: "./Assets/dishes/sashimi/hotate.jpg",
  },
  {
    category: "Udon",
    name: "Tempura Udon",
    description: "Udon noodles in a savory broth topped with crispy tempura.",
    price: "$10.00",
    img: "./Assets/dishes/udon/udon1.jpg",
  },
  {
    category: "Tempura",
    name: "Tempura",
    description: "Crispy tempura.",
    price: "$20.00",
    img: "./Assets/dishes/tempura/tempura1.jpg",
  },
  {
    category: "Sushi",
    name: "Spicy Tuna Roll",
    description: "A delicious roll with fresh tuna, spicy mayo, and cucumber.",
    price: "$12.00",
    img: "./Assets/dishes/sushi/salmon.jpg",
  },
  {
    category: "Sashimi",
    name: "Salmon Sashimi",
    description: "Fresh salmon sashimi served with soy sauce and wasabi.",
    price: "$15.00",
    img: "./Assets/dishes/sashimi/hotate.jpg",
  },
  {
    category: "Udon",
    name: "Tempura Udon",
    description: "Udon noodles in a savory broth topped with crispy tempura.",
    price: "$10.00",
    img: "./Assets/dishes/udon/udon1.jpg",
  },
  {
    category: "Tempura",
    name: "Tempura",
    description: "Crispy tempura.",
    price: "$20.00",
    img: "./Assets/dishes/tempura/tempura1.jpg",
  },
  {
    category: "Sushi",
    name: "Spicy Tuna Roll",
    description: "A delicious roll with fresh tuna, spicy mayo, and cucumber.",
    price: "$12.00",
    img: "./Assets/dishes/sushi/salmon.jpg",
  },
  {
    category: "Sashimi",
    name: "Salmon Sashimi",
    description: "Fresh salmon sashimi served with soy sauce and wasabi.",
    price: "$15.00",
    img: "./Assets/dishes/sashimi/hotate.jpg",
  },
  {
    category: "Udon",
    name: "Tempura Udon",
    description: "Udon noodles in a savory broth topped with crispy tempura.",
    price: "$10.00",
    img: "./Assets/dishes/udon/udon1.jpg",
  },
  {
    category: "Tempura",
    name: "Tempura",
    description: "Crispy tempura.",
    price: "$20.00",
    img: "./Assets/dishes/tempura/tempura1.jpg",
  },
];

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredMenuItems = menuItems.filter((item) =>
    selectedCategory === "All" ? true : item.category === selectedCategory
  );

  return (
    <section className="py-16 bg-gray-100 flex flex-col lg:flex-row">
      <div className="w-full lg:w-1/4 bg-white border-r border-gray-300 p-4 lg:sticky lg:top-0">
        <ul>
          {categories.map((category, index) => (
            <li
              key={index}
              className={`main-title cursor-pointer mb-2 p-2 rounded ${
                selectedCategory === category
                  ? "bg-gray-200"
                  : "hover:bg-gray-100"
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </li>
          ))}
        </ul>
      </div>
      <div className="w-full min-h-[400px] lg:w-3/4 p-4 overflow-y-auto">
        <h2 className="text-2xl font-bold mb-4">{selectedCategory}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {filteredMenuItems.map((item, index) => (
            <SlideInSection key={index}>
              <div className="bg-white border-2 border-lightText p-5 rounded-lg shadow-md flex flex-col h-full">
                <img
                  className="w-full h-48 object-cover rounded-md mb-4"
                  src={item.img}
                  alt={item.name}
                />
                <h3 className="text-xl font-semibold mb-2 main-title flex-grow">
                  {item.name}
                </h3>
                <p className="text-gray-700 mb-4 flex-grow">
                  {item.description}
                </p>
                <p className="text-lg font-bold">{item.price}</p>
              </div>
            </SlideInSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;
