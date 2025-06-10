import ReactDOM from 'react-dom/client'
import Header from "./src/components/Header"
import Footer from "./src/components/Footer"
import Body from './src/components/Body'

const AddNeme = () => {
  return (
    <div className=''>
      <Header/>
      <Body/>
      <Footer/>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <AddNeme/>

);

