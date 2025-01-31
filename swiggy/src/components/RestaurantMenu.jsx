import { useEffect, useState } from "react";
import Loading from "./Loading";
import { Link, useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  const { restId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.1458004&lng=79.0881546&restaurantId=56370&catalog_qa=undefined&submitAction=ENTER"
    );

    const json = await data.json();
    console.log(json);

    setResInfo(json.data);
  };

  if (resInfo === null) return <Loading />;

  // destructure restrarent menu
  const {name,cuisines,costForTwoMessage} = resInfo?.cards[2]?.card?.card?.info

  const itemCards =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards;
  console.log(itemCards);

  return (
    <div>
      <h1>{name}</h1>
      <h3>{cuisines.join(", ")}-{costForTwoMessage}</h3>
      
      <ul>
        <Link>
          <li>
            {/* {
              resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]
                .card.card.carousel[0].dish.info.name
            }{" "}
            -{" "}
            {resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]
              .card.card.carousel[0].dish.info.price / 100 ||
              resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]
                .card.card.carousel[0].dish.info.defaultPrice} */}
          </li>
        </Link>
        <li>
          {/* {
            resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1].card
              .card.carousel[1].dish.info.name
          } */}
        </li>
        {/* <li>{itemCard?.carousel[0]?.dish?.info.name}</li>
            {/* <li>Diet Coke</li>  */}
        {/* {itemCard.map((item)=>{
            <li>{item.name}</li>
           })} */}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
