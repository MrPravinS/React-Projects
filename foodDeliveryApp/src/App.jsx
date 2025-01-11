import Header from "./components/Header";
import SearchBar from "./components/body/SearchBar";
import FoodCard from "./components/body/FoodCard";
import Footer from "./components/Footer";
import resData from "./components/Utils/resData";
import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <SearchBar />
      <button className="p-2 m-3 bg-gray-500 text-white rounded-md cursor-pointer">
        Rating more than 4
      </button>

      <div className="flex flex-wrap">
        {resData.map((item) => (
          <FoodCard
            image={item.image}
            title={item.title}
            price={item.price}
            rating={item.rating.rate}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default App;
