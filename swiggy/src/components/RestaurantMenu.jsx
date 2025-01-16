import { useEffect, useState } from "react"
import Loading from "./Loading"

const RestaurantMenu= () =>{
    const [resInfo,setResInfo] = useState(null)

    useEffect(()=>{
        fetchMenu()
    },[])

    const fetchMenu =  async() => {
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.1458004&lng=79.0881546&restaurantId=56370&catalog_qa=undefined&submitAction=ENTER")

        const json = await data.json()
        console.log(json);

        setResInfo(json.data)
        
    }
  
     if(resInfo == null) return <Loading/>;

    // const{itemCard} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
    // console.log(itemCard);
    
 return (
    <div>
        <h1>{resInfo?.cards[2]?.card?.card?.info?.name}</h1>
        <p>{resInfo?.cards[2]?.card?.card?.info?.cuisines.join(", ")
        } - {resInfo?.cards[2]?.card?.card?.info?.costForTwoMessage}</p>
        <h2>Menu</h2>
        <ul>
            <li>{resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1].card.card.carousel[0].dish.info.name}</li>
            <li>{resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1].card.card.carousel[1].dish.info.name}</li>
            {/* <li>{itemCard?.carousel[0]?.dish?.info.name}</li> */}
            <li>Diet Coke</li>
        </ul>
    </div>
      
 )
}


export default RestaurantMenu