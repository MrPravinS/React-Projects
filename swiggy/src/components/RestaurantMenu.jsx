import Loading from "./Loading";
import {useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  // const [resInfo, setResInfo] = useState(null);

  const { restId } = useParams();

  const resInfo = useRestaurantMenu(restId);

  if (resInfo === null) return <Loading />;

  // destructure restrarent menu
  // const { name, cuisines, costForTwoMessage } =
  //    resInfo?.cards?.[2]?.card?.card?.info
console.log(resInfo);

  const itemsCards =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
      ?.itemCards;
  // console.log(itemCards);

  return (
    <div>
      <h1>{resInfo?.cards?.[2]?.card?.card?.info.name}</h1>
      <h1>
        {resInfo?.cards?.[2]?.card?.card?.info.cuisines.join(", ")}-{resInfo?.cards?.[2]?.card?.card?.info.costForTwoMessage}
      </h1>

      <ul>
        {itemsCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name}-{" Rs."}
            {(item.card.info.finalPrice)/100 || (item.card.info.defaultPrice)/100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
