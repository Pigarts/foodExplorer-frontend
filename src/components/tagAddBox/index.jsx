
import {Container} from "./styles"

 export function TagAddBox({$isNew, value, onClick, ...rest}) {
    return(
        <Container $isNew={$isNew}>
            <input type="text" 
            value={value} 
            readOnly={!$isNew} 
            {...rest}
            />
            <button type="button"
            onClick={onClick}
            className={$isNew ? "button-add" : "button-remove"}>
            {$isNew ? "+" : "x"} 
            </button>
        </Container>

    )
}