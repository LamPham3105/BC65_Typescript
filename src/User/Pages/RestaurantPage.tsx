import React from "react";
import RestaurantInformation from "../Components/Restaurants/RestaurantInformation";
import RestaurantMenu from "../Components/Restaurants/RestaurantMenu";
import RestaurantNav from "../Components/Restaurants/RestaurantNav";

type Props = {};

const RestaurantPage = (props: Props) => {
  return (
    <>
      <RestaurantNav />
      <RestaurantInformation />
      <RestaurantMenu />
    </>
  );
};

export default RestaurantPage;
