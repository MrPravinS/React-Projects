import Header from './components/Header'
import Body from './components/Body'
import Footer from "./components/Footer"
import { Outlet } from 'react-router-dom'

function App() {

  return (
   <div>
   <Header/>
   <Outlet/>
   {/* {/* <Body/> */}
   <Footer/>
   </div>
  )
}


export default App
