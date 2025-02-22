import Loading from "./Loading";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestCategories from "./RestCategories";

const RestaurantMenu = () => {
  // const [resInfo, setResInfo] = useState(null);

  const { restId } = useParams();

  const resInfo = useRestaurantMenu(restId);

  if (resInfo === null) return <Loading />;

  // destructure restrarent menu
  const { name, cuisines, costForTwoMessage } =
    // eslint-disable-next-line no-unsafe-optional-chaining
    resInfo?.data?.cards[2]?.card?.card.info;

  const itemsCards =
    resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card?.itemCards || [];
  console.log(
    resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards
  );

  // const categories = resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]
  // ?.filter(c => c.card?.["card"]?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
  const categories =
    resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1].card
      .card.itemCards;
  console.log(categories);

  return (
    <div className="text-center ">
      <h1 className="font-bold text-2xl mb-2">{name}</h1>
      <p className="font-bold text-lg">
        {cuisines.join(", ")}-{costForTwoMessage}
      </p>
      {/* {catogories accordian */}
      {categories.map((category)=>{
        <RestCategories/>

      })}
    </div>
  );
};

export default RestaurantMenu;
