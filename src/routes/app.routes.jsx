import {Routes, Route} from "react-router-dom"

import { Home } from "../pages/Home" 
import { FoodDetails } from "../pages/FoodDetails"


export function AppRoutes() {

    return (
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/food/:id" element={<FoodDetails/>} />
        </Routes>
    )
}