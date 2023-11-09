import { Icon_Logo } from "../Icons"
import { Container } from "./styles"
import { useAuth } from "../../hooks/auth";


export function Logo() {
    const  user  = useAuth();

    const isAdmin = user.adm;

    return (
        <Container>
           <div><Icon_Logo/> <h1>food explorer</h1></div>  {isAdmin ? <span>admin</span>: <></> }
        </Container>
    )
}