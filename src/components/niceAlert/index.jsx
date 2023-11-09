import { Container } from "./styles";

export function NiceAlert({title, visible = true}) {

    return(
    <Container className={visible ? "bad" : ""} > 
        <span>{title}</span>
    </Container>
 )
}