import {Routes, Route} from "react-router-dom"

import { Home } from "../pages/Home" 
import { FoodDetails } from "../pages/FoodDetails"
import { LikedFoods } from "../pages/LikedFoods"
import { Cart } from "../pages/Cart"
import { OrdersHistory } from "../pages/OrdersHistory"
import { NotFund } from "../pages/NotFund"

export function AppRoutes() {

    return (
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/food/:id" element={<FoodDetails/>} />
            <Route path="/likeds" element={<LikedFoods/>}/>
            <Route path="/cart" element={<Cart/>}/>
            <Route path="/ordershistory" element={<OrdersHistory/>}/>
            <Route path="*" exact={true} element={< NotFund/>} />
        </Routes>
    )
}