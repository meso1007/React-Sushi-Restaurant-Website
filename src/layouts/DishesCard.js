import React from "react";
import { BsStarFill, BsStarHalf } from "react-icons/bs";
import { Button } from "react-scroll";

const DishesCard = (props) => {
  return (
    <div className="w-full flex flex-col lg:w-1/4 p-5 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded-lg">
      <img className="" src={props.img} alt="img" />
      <div className="space-y-4">
        <h3 className="font-semibold text-center text-xl pt-6">
          {props.title}
        </h3>
        <p className="text-center text-gray-600">{props.text}</p>

        <div className="flex flex-row justify-center">
          <BsStarFill className="text-brightcolor" />
          <BsStarFill className="text-brightcolor" />
          <BsStarFill className="text-brightcolor" />
          <BsStarFill className="text-brightcolor" />
          <BsStarHalf className="text-brightcolor" />
        </div>
        <div className="flex flex-row items-center justify-center gap-4">
          <h3 className="font-semibold text-lg">{props.price}</h3>
          <Button title="Buy Now" />
        </div>
      </div>
    </div>
  );
};

export default DishesCard;
