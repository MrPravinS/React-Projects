import { useEffect, useState } from "react"
import RestroCards from "./RestroCards"

const Body = () => {
    const [foodItem, setFoodItem] = useState([])


   

    const fetchData = async() => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.14630&lng=79.08490&is-seo-homepage-enabled=true")
        const jsonData = await data.json()
        console.log(jsonData);

        // setFoodItem(jsonData)
        
    }

     useEffect(()=>{
        fetchData()
    },[])

    return (
        <div className="bg-white">
            <RestroCards cloudinaryImageId="RX_THUMBNAIL/IMAGES/VENDOR/2025/6/5/556d7ba2-4a77-49c7-9ff3-596767c8ebe8_54604.JPG"/>
        </div>
    )
}

export default Body