import{ Container, Content, Option } from "./styles.js"

export function Select({icon: Icon, title, options, onChange, orderStatus, ...rest}) {
    return (
        <Content>
            <span>{title}</span>
        <Container>
            {Icon && <Icon size={20}/>}
            <div id="orderstatus" className={`${orderStatus}`}></div>
            <select name="#" id="#" onChange={onChange}  {...rest}>
          
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