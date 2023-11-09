import { Container } from "./styles";

export function AlertError({title, visible = true}) {

    return(
    <Container className={visible ? "bad" : "nice"} > 
        <span>{title}</span>
    </Container>
 )
}