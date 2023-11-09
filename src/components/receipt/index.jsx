import { Container } from "./styles";
import {Icon_Receipt } from "../Icons";

export function Receipt() {
  
    return(
        <Container> 
        <div className="IconBox">
            <div className="SpanBackground"><span>0</span></div>
            <Icon_Receipt/>
        </div>
        </Container>
 )
}