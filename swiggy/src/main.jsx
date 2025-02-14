import { lazy, StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import About from "./components/About";
import Contact from "./components/Contact.jsx";
import Error from "./components/Error.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Body from "./components/Body.jsx";
import RestaurantMenu from "./components/RestaurantMenu.jsx";
// import Grocery from './components/Grodcery.jsx'

const Grocery = lazy(() => import("./components/Grocery.jsx"));
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Grocery />
          </Suspense>
        ),
      },

      {
        path: "/restaurant/:restId",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={appRouter} />
  </StrictMode>
);
