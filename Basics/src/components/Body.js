import { useEffect, useState } from "react";
import RestroCards from "./RestroCards";
import Loading from "./Loading"
const Body = () => {
  const [foodItem, setFoodItem] = useState([]);

  const imgId =
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.14630&lng=79.08490&is-seo-homepage-enabled=true"
    );
    const jsonData = await data.json();

    const cards = jsonData?.data?.cards || [];
    const restaurantCard = cards.find(
      (card) => card?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

    const restaurants =
      restaurantCard?.card?.card?.gridElements?.infoWithStyle?.restaurants ||
      [];

    setFoodItem(restaurants);
    console.log(restaurants);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return foodItem.length === 0 ? <Loading/> : (
    <div className="bg-white flex flex-wrap">
      {foodItem.map((cards) => {
        return (
          <RestroCards
            key={cards.info.id}
            area={cards.info.areaName}
            cloudinaryImageId={imgId + cards.info.cloudinaryImageId}
            name={cards.info.name}
            avgRating={cards.info.avgRating}
            cuisines={cards.info.cuisines.join(",")}
          />
        );
      })}
    </div>
  );
};

export default Body;
