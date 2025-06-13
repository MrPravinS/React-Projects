import { useEffect, useState } from "react"

const RestrorantMenu = () => {
    const [menuItems, setMenuItems] = useState(null)

    useEffect(()=>{
     fetchMenu()
    },[])

const fetchMenu = async() => {
    const data = await fetch("")
    const jsonData = data.json()
    console.log(jsonData);
    
}

    return (
        
        <div>
            <h1>Restro Menu</h1>
            <ul>
                <li>Biryani</li>
                <li>Burger</li>
                <li>Pizza</li>
            </ul>
        </div>
    )
}
export default RestrorantMenu