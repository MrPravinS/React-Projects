import React from "react";

const FoodCard = () => {
  return (
    <div className="flex-wrap h-[200px]  m-3 border   w-[150px] hover:border-black hover:shadow-lg transition duration-300">
      <img
        className="m-1 w-[140px] h-[100px]"
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/4/9/e73d00ec-d9b5-4c5c-9d7e-76210175ab61_840018.jpg"
        width={100}
        alt="food-img"
      />
      <p className="flex justify-center">Speacial Thali</p>
      <p className="flex justify-center">4.5 Star</p>
      <p className="flex justify-center">20 Min Deliver</p>
    </div>
  );
};

export default FoodCard;
