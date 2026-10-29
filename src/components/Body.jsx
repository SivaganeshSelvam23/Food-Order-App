import React from "react";
import RestaurantCard from "./RestaurantCard";
import restaurantsList from "../utils/mockData";

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search bar</div>
      <div className="flex flex-wrap justify-center">
        {restaurantsList.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant.info} />
        ))}
      </div>
    </div>
  );
};

export default Body;
