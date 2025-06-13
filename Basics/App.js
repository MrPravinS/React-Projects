import ReactDOM from 'react-dom/client'
import Header from "./src/components/Header"
import Footer from "./src/components/Footer"
import Body from './src/components/Body'
import Contact from './src/components/Contact'
import Cart from  './src/components/Cart'
import About from  './src/components/About'
import Cart from  './src/components/Cart'
import Error from './src/components/Error'
import RestrorantMenu from './src/components/RestrorantMenu'

import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'

const AppLayout = () => {
  return (
    <div className='w-full h-full'>
      <Header/>
      <Outlet></Outlet>
      {/* <Body/> */}
      <Footer/>
    </div>
  )
}

const routerApp = createBrowserRouter([{
  path:"/",
  element:<AppLayout/>,
  children:[{
    path:"/",
    element:<Body/>
  },{
  path:'/about',
  element:<About/>,
},
{
  path:'/contact',
  element:<Contact/>
},
{
  path:'/cart',
  element:<Cart/>
},{
  path:'/restrorants/:id',
  element:<RestrorantMenu/>
}
],
  errorElement:<Error/>

}
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <RouterProvider router={routerApp}/>

);

