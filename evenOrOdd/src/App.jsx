import EvenOrOddChecker from './EvenOrOdd'
import './App.css'
import { useEffect,useState } from 'react'
import ProfileCart from './ProfileCart'

function App() {
  const [data,setData] = useState([])

 useEffect(()=>{
   fetchData()
 },[])

 const fetchData = async() => {
    const resData = await fetch("https://dummyjson.com/users")
   const res = await resData.json()
   console.log(res.users);
   
   setData(res.users)
 }

  return (
    <div className='container'>
    {/* <EvenOrOddChecker/> */}
    {data.map((user)=>{
      return <ProfileCart key={user.id} image={user.image} firstName={user.firstName} lastName={user.lastName} phone={user.phone}/>
    })}
    
    </div>
  )
}

export default App
