import React from "react";
import { RESLOGO_URL } from "../utils/constants";
const RestaurantCard = ({ resData }) => {
  const { name, cloudinaryImageId, cuisines, avgRating, deliveryTime } =
    resData;
  return (
    <div className="p-4 m-5 w-62.5 hover:border border-solid border-black rounded-lg bg-gray-100 cursor-pointer">
      <img
        className="w-62.5 h-50 mb-4 rounded-lg"
        src={RESLOGO_URL + cloudinaryImageId}
      />
      <h3 className="font-bold text-[20px] py-3">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} ⭐</h4>
      <h4>{deliveryTime} minutes</h4>
    </div>
  );
};

export default RestaurantCard;
