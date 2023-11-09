
import { Container } from "./styles"

export function IconButton({ title, icon: Icon, ...rest }) {
    return (
        <Container  
            type="button" {...rest}>
            {Icon && <Icon size={20}/>}
            {title}
        </Container>
    )
}