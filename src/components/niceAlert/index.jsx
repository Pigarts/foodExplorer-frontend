import { Container } from "./styles";

export function NiceAlert({title, visible = true}) {

    return(
    <Container className={visible ? "alert" : ""} > 
        <span>{title}</span>
    </Container>
 )
}