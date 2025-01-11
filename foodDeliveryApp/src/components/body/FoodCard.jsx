import React from "react";


const FoodCard = ({title, price,image,rating}) => {

  return (
   
    <div className="flex-wrap h-[300px]  m-3 border bg-gray-200   w-[250px] hover:border-black hover:shadow-lg transition duration-300">
      <img
        className= " justify-center mt-2 ml-2 w-[160px] h-[100px]"
        src={image}
        width={150}
        alt="food-img"
      />
      <p className="flex justify-center">{title}</p>
      <p className="flex justify-center">Price:{price}</p>
      <p className="flex justify-center">Rating:{rating}/5</p>
    </div>
  );
};

export default FoodCard;
