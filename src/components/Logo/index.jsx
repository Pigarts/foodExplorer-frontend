import { Icon_Logo } from "../Icons"
import { Container } from "./styles"
import { useAuth } from "../../hooks/auth";


export function Logo() {
    const  { user }  = useAuth();
    console.log(user)
    return (
        <Container>
           <div className="flex"><div className="main"><Icon_Logo/> <h1>food explorer</h1> </div> {user && user.adm ? <span>admin</span> : <></>}</div>
        </Container>
    )
}