import  { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loading from "./Loading";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [foodCard, setFoodCard] = useState([]);
  const [searchFood, setSearchFood] = useState("");

  useEffect(() => {
    fetchData();
  }, [setFoodCard,setSearchFood]);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.1458004&lng=79.0881546&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    // const json = useFoodCart()
    const feedData =
      json?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants || [];

    setFoodCard(feedData);
    console.log(feedData);
  };

const onlineStatus = useOnlineStatus();

if(onlineStatus === false)return <h1>Looks like youre Offline!! please check your internet connection</h1>

  return (
    <div className="m-2">
      <div className="flex justify-center bg-gray-300 p-3 rounded-md">
        <input
          value={searchFood}
          onChange={(e) => setSearchFood(e.target.value)}
          type="text"
          placeholder="Enter Food"
          className="pl-2 text-black rounded-lg py-1"
        />
        <button
          onClick={() => {
            const filters = foodCard.filter((item) =>
              item.info.name.toLowerCase().includes(searchFood.toLowerCase())
            );
            setFoodCard(filters);
          }}
          className="ml-2 p-1 bg-blue-600 px-2 py-1 rounded-lg text-white hover:bg-blue-700 cursor-pointer"
        >
          Search
        </button>
      </div>

      <button
        onClick={() => {
          const filters = foodCard.filter((item) => item.info.avgRating > 4.3);
          console.log(filters);
          setFoodCard(filters);
        }}
        className="m-2 bg-gray-300 px-2 py-1 rounded-lg cursor-pointer"
      >
        Top Rated
      </button>

      <div className="flex flex-wrap">
        {foodCard.length > 0 ? (
          foodCard.map((restaurant) => (
            <Link to={`/restaurant/${restaurant.info.id}`} key={restaurant.info.id}>
              <div className="w-[270px] h-[280px] m-4 bg-gray-200 p-3 rounded-lg shadow-md hover:scale-105 cursor-pointer duration-300">
                <img
                  src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${restaurant.info.cloudinaryImageId}`}
                  alt={restaurant.info.name}
                  className="w-full h-40 rounded-md object-cover"
                />
                <h3 className="mt-2 font-bold text-lg">{restaurant.info.name}</h3>
                <p className="text-sm text-gray-600">
                  {restaurant.info.cuisines.join(", ")}
                </p>
                <p className="mt-1 text-sm text-green-600">
                  {restaurant.info.avgRating} ★
                </p>
              </div>
            </Link>
          ))
        ) : (
          <Loading />
        )}
      </div>
    </div>
  );
};

export default Body;
