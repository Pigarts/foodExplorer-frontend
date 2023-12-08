import { Container } from "./styles";

export function AlertError({title, visible = true}) {

    return(
    <Container className={visible ? "error" : "nice"} > 
        <span>{title}</span>
    </Container>
 )
}