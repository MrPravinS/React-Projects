const RestroCards = ({area, avgRating, cloudinaryImageId, cuisines, name }) => {
  return (
    <div className="bg-white w-[250px] p-2 m-4 rounded-lg shadow-2xl mb-4 hover:scale-105 cursor-pointer transition duration-300">
      <img className="rounded-lg h-[150px] w-full" src={cloudinaryImageId} alt="" />
      <p className="font-bold text-center mt-2">{name}</p>
      <p className="text-xl font-bold ml-2">{avgRating}/5 🌟</p>
      <p className="text-gray-600 text-center flex flex-wrap justify-center m-2">{cuisines}</p>
      <p className="font-semibold text-center m-2">{area}</p>
    </div>
  );
};

export default RestroCards;
