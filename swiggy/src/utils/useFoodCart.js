import { useEffect, useState } from "react";
import { FOOD_CART_API } from "./constant";

const useFoodCart = () => {
    const [foodCart,setFoodCart] = useState(null)

    useEffect(()=>{
        fetchData()
    },[])

    const fetchData = async() => {
        const data = await fetch(FOOD_CART_API)
        const jsonData = await data.json()
        setFoodCart(jsonData)
    }
    return foodCart
}

export default useFoodCart