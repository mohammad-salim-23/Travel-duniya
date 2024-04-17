import {
    createBrowserRouter,
    
  } from "react-router-dom";

import Home from "../pages/Home";
import Roots from "../components/Roots";
import Destinations from "../components/Destinations";
 

  const router = createBrowserRouter([
    {
      path: "/",
      element:<Roots></Roots>,
      children:[
        {
            path:"/",
            element:<Home></Home>,
            loader:()=>fetch(`/tour.json`)
        },
        {
            path:`/Tour/:id`,
            element:<Destinations></Destinations>,
            loader:()=>fetch(`/tour.json`)
        }

      ]
    },
  ]);
  export default router;
  