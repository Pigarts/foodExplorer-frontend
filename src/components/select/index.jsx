import{ Container, Content, Option } from "./styles.js"

export function Select({icon: Icon, title, options, onChange, ...rest}) {
    return (
        <Content>
            <span>{title}</span>
        <Container>
            {Icon && <Icon size={20}/>}
            
            <select name="#" id="#" onChange={onChange}>
          
                {
                options.map((option, index) => (
                    <Option key={index} value={option.value}>
                        {option.label}
                    </Option>
                    ))
                }
            </select>
        </Container>
        </Content>
    )
}