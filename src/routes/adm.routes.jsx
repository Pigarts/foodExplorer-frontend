import {Routes, Route} from "react-router-dom"

import { Home } from "../pages/AdmPages/Home" 
import { FoodDetails } from "../pages/AdmPages/FoodDetails"
import { NewFood } from "../pages/AdmPages/NewFood"
import { EditFood } from "../pages/AdmPages/EditFood"
import { AmdOrdersHistory } from "../pages/AdmPages/OrdersHistory"


export function AdmRoutes() {

    return (
        <Routes>
            <Route path="/" element={< Home/>} />
            <Route path="/food/:id" element={< FoodDetails/>} />
            <Route path="/newFood" element={< NewFood/>} />
            <Route path="/editFood/:id" element={< EditFood/>} />
            <Route path="/ordershistory" element={< AmdOrdersHistory/>}/>
        </Routes>
    )
}