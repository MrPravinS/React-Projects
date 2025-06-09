import ReactDOM from 'react-dom/client'
import Header from "./components/Header"
import Footer from "./components/Footer"
const heading = <h1>Hey How have you been?</h1>

const AddNeme = () => {
  return (
    <div className=''>
      <Header/>
      <Footer/>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <AddNeme/>

);

console.log(heading);
