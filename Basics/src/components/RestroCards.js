const RestroCards = ({ avgRating, cloudinaryImageId, cuisines, name }) => {
  const imgId = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"
  return (
    <div className="bg-white w-[200px] m-4 h-[300px] rounded-lg shadow-2xl mb-4">
      <img src={imgId + cloudinaryImageId} alt="" />
      <p>Name</p>
      <p>Ratings</p>
      <p>cuisenes</p>
      <p>Area</p>
    </div>
  );
};

export default RestroCards;
