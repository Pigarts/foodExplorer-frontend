import{ Container, Content } from "./styles.js"

export function TextBox({icon: Icon, title, ...rest}) {
    return (
        <Content>
            <span>{title}</span>
        <Container>
            {Icon && <Icon size={20}/>}
            
            <textarea {...rest} />
        </Container>
        </Content>
    )
}