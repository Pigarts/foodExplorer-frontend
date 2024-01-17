import {Routes, Route} from "react-router-dom"  
import { Login } from "../pages/AuthPages/Login"
import { SignUp } from '../pages/AuthPages/SignUp'
import { NotFund } from "../pages/NotFund"



export function AuthRoutes() {

    return (
        <Routes>
            <Route path="/" element={< Login/>} />
            <Route path="/signUp" element={< SignUp/>} />
            <Route path="*" exact={true} element={< NotFund/>} />
        </Routes>
      
    )
}