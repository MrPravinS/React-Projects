import { useState } from "react"

 const User = () => {
    const [count,setCount] = useState(0)
    return  <div className="border mb-2 border-black">
    <h2 >Name: Pravin</h2>
    <h3>Location: Nagpur</h3>
    <p onClick={()=>setCount(count + 1)} className="cursor-pointer">Count: {count}</p>
  </div>
}

export default User

