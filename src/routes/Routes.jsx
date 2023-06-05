import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/home/Home";
import Menu from "../pages/menu/Menu";
import Order from "../pages/order/Order";
import Login from "../pages/login/Login";
import Resister from "../pages/resister/Resister";
import DashBoard from "../layout/DashBoard";
import MyCrt from "../pages/dashboard/MyCrt";
import AllUsers from "../pages/dashboard/AllUsers";
import AddItem from "../pages/dashboard/AddItem";
import AdminRoute from "./AdminRoute";
import ManageItem from "../pages/dashboard/ManageItem";
import Payment from "../pages/dashboard/Payment";


const router = createBrowserRouter([
    {
        path:"/",
        element:<Main></Main>,
        children:[
            {
                path:"/",
                element:<Home></Home>
            },
            {
                path:'/menu',
                element:<Menu></Menu>
            },
            {
                path:'/order/:category',
                element:<Order></Order>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/resister',
                element:<Resister></Resister>
            }
        ]
    },
    {
        path:'dashBoard',
        element:<DashBoard></DashBoard>,
        children:[
            {
                path:'mycart',
                element:<MyCrt></MyCrt>
            },
            {
                path:'payment',
                element:<Payment></Payment>
            },
            // admin
            {
                path:'allusers',
                element:<AdminRoute><AllUsers></AllUsers></AdminRoute>
            },
            {
                path:'additem',
                element:<AdminRoute><AddItem></AddItem></AdminRoute>
            },
            {
                path:'manageitem',
                element:<AdminRoute><ManageItem></ManageItem></AdminRoute>
            }
        ]
            
    }
])
export default router;