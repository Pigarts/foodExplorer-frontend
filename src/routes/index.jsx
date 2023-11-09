import { BrowserRouter } from "react-router-dom";
import { AuthRoutes } from "./auth.routes"
import { AppRoutes } from "./app.routes"
import { AdmRoutes } from "./adm.routes"
import { useAuth } from "../hooks/auth"



export function Routes() {
    const { user } = useAuth();
    return (
        <BrowserRouter>
            {user ? <>{ user.adm ? <AdmRoutes/> : <AppRoutes/> } </> : <AuthRoutes/>}
        </BrowserRouter>
)
}
