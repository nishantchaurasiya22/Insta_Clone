import { createBrowserRouter, RouterProvider } from "react-router"
import AuthLayOut from "../features/auth/layouts/AuthLayOut"
import Login from "../features/auth/pages/Login"
import Register from "../features/auth/pages/Register"
import HomeLayOut from "../features/home/layouts/HomeLayOut"
import Home from "../features/home/pages/Home"

const AppRoutes = () => {
    const router=createBrowserRouter([
        {
            path:"/",
            element:<AuthLayOut/>,
            children:([
                {
                    index:true,
                    element:<Login/>
                },
                {
                    path:"register",
                    element:<Register/>
                }
            ])
        },
        {
            path:"/home",
            element:<HomeLayOut/>,
            children:[
                {
                 index:true,
                 element:<Home/>
                }
            ]
        }
    ])
  return (
    <RouterProvider router={router} />
  )
}

export default AppRoutes