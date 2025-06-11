import { useEffect, useState } from "react";
import RestroCards from "./RestroCards";
import Loading from "./Loading"
const Body = () => {
  const [allFoodItem, setAllFoodItem] = useState([]);
  const [foodItem, setFoodItem] = useState([]);
  const [searchInput, setSearchInput] = useState("")
  

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
    setAllFoodItem(restaurants)
    setFoodItem(restaurants);
    console.log(restaurants);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return foodItem.length === 0 ? <Loading/> : (
    <div className="">
      <div className=" flex justify-center items-center m-3 ">
        <input value={searchInput} onChange={(e) => setSearchInput(e.target.value)} placeholder="enter food items" type="text" className="bg-gray-200 p-2 w-[300px] rounded-full"/>
        <button onClick={()=>{
          const filters = allFoodItem.filter((item)=>
            item.info.name.toLowerCase().includes(searchInput.toLowerCase())
          )
          
          setFoodItem(filters);
          setSearchInput("")
        }} className="bg-blue-500 text-white px-2 py-2 rounded-full focus:ring-1 hover:bg-blue-600 transition duration-400 cursor-pointer font-bold">Search</button>
      </div>
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
    </div>
  );
};

export default Body;
