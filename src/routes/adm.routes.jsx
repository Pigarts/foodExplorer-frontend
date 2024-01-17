import {Routes, Route} from "react-router-dom"


import { Home } from "../pages/Home" 
import { FoodDetails } from "../pages//FoodDetails"
import { NewFood } from "../pages/AdmPages/NewFood"
import { EditFood } from "../pages/AdmPages/EditFood"
import { OrdersHistory } from "../pages/OrdersHistory"
import { NotFund } from "../pages/NotFund"

export function AdmRoutes() {

    return (
        <Routes>
            <Route path="/" element={< Home/>} />
            <Route path="/food/:id" element={< FoodDetails/>} />
            <Route path="/ordershistory" element={<OrdersHistory/>}/>
            <Route path="/newFood" element={< NewFood/>} />
            <Route path="/editFood/:id" element={< EditFood/>} />
            <Route path="*" exact={true} element={< NotFund/>} />
        </Routes>
    )
}