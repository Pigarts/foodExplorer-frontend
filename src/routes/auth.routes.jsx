import {Routes, Route} from "react-router-dom"  
import { Login } from "../pages/AuthPages/Login"
import { SignUp } from '../pages/AuthPages/SignUp'



export function AuthRoutes() {

    return (
        <Routes>
            <Route path="/signUp" element={< SignUp/>} />
            <Route path="/" element={< Login/>} />
        </Routes>
      
    )
}