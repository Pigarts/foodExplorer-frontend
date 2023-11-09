import {Routes, Route} from "react-router-dom"  
import { Login } from "../pages/login"
import { SignUp } from '../pages/SignUp'



export function AuthRoutes() {

    return (
        <Routes>
            <Route path="/signUp" element={< SignUp/>} />
            <Route path="/" element={< Login/>} />
        </Routes>
      
    )
}