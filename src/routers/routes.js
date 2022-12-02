// Import Library's Hook
import { createBrowserRouter, createHashRouter } from "react-router-dom";

// Import Components
import RootLayout from "../layouts/RootLayout";
import Homepage from "../pages/HomePage";
import Movie from "../pages/Movie";
import UserProtected from "./UserProtected";
import Checkout from "../pages/Checkout";
import Auth from "../pages/Auth";
import Signin from "../pages/Auth/Signin";
import Signup from "../pages/Auth/Signup";
import NotFound from "../pages/NotFound";

const routes = createHashRouter([
   {
      path: "/",
      element: <RootLayout />,
      children: [
         // Homepage
         { index: true, element: <Homepage /> },

         // Movie
         { path: "/movie/:movieId", element: <Movie /> },

         // Checkout
         {
            path: "/checkout/:checkoutId",
            element: (
               <UserProtected>
                  <Checkout />
               </UserProtected>
            ),
         },

         // Authentication
         {
            path: "",
            element: <Auth />,
            children: [
               { path: "/signin", element: <Signin /> },
               { path: "/signup", element: <Signup /> },
            ],
         },
      ],
   },

   { path: "*", element: <NotFound /> },
]);

export default routes;
