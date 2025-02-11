import { useEffect, useState } from "react"

 const User = () => {
    const [count,setCount] = useState(0)

    useEffect(()=>{
      const timer = setInterval(()=>{
    console.log("Hey React Master");
    
      },1000)

      return () => {
        clearInterval(timer)
        console.log("useEffect Unmount");
        
      };
    },[])

    const fetchData = async() =>{
        
    }
    return  <div className="border mb-2 border-black">
    <h2 >Name: Pravin</h2>
    <h3>Location: Nagpur</h3>
    <p onClick={()=>setCount(count + 1)} className="cursor-pointer">Count: {count}</p>
  </div>
}

export default User

