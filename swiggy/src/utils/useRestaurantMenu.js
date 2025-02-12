import { useEffect, useState } from "react"
import { MENU_API } from "../utils/constant";

const useRestaurantMenu = (restId) => {
 // fetch data
 const [resInfo,setResInfo] = useState(null)

 useEffect(()=>{
    fetchData()
 },[])

 const fetchData = async () => {
    const data = await fetch(MENU_API+restId)
    const json = await data.json()
    setResInfo(json)
 }
 return resInfo
}

export default useRestaurantMenu