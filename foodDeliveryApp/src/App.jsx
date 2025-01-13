import Header from "./components/Header";
import SearchBar from "./components/body/SearchBar";
import FoodCard from "./components/body/FoodCard";
import Footer from "./components/Footer";
import "./App.css";
import { useEffect, useState } from "react";
import Loader from "./components/Loader";

function App() {
  const [products, setProducts] = useState([]);
  const [search,setSearch] = useState("")
  const [filterCom,setFilterCom] = useState([])
  

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch("https://fakestoreapi.com/products");

    const json = await data.json();
    console.log(json);

    setProducts(json);
    setFilterCom(json)
  };

  return (
    <div>
      <Header />
      <SearchBar />
       <input type="text" placeholder="enetr product " className="p-2 m-2 text-black "
       value={search}
       onChange={(e)=>{
        setSearch(e.target.value)
       }}
       
       />
       <button className="bg-blue-500 px-2 py-2 rounded-lg hover:bg-blue-800 text-white  cursor-pointer"
        onClick={()=>{
          const filterS = products.filter((data)=>
            data.title.toLowerCase().includes(search)
          )
          setFilterCom(filterS)
        }}
       >Search</button>
      <button
        onClick={() => {
          const filter = products.filter((item) => item.rating.rate > 4);
          setProducts(filter);
          // console.log(filter);
        }}
        className="p-2 m-3 bg-gray-500 text-white rounded-md cursor-pointer"
      >
        Best Rating
      </button>

      <div className="flex flex-wrap">
        {products.length === 0 ? (<Loader/>):(filterCom.map((item) => (
          <FoodCard
            key={item.id}
            image={item.image}
            title={item.title}
            price={item.price}
            rating={item.rating.rate}
          />
        )))}
        
        
      </div>
      <Footer />
    </div>
  );
}

export default App;
