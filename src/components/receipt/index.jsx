import { Container } from "./styles";
import { useEffect, useState } from "react";
import {Icon_Receipt } from "../Icons";
import { useAuth } from "../../hooks/auth";

export function Receipt() {
    const [ cartIndex, setCartIndex ] = useState([])
    const { cartData, screenCart } = useAuth();

    useEffect(() => {
        setCartIndex(screenCart.length)
      }, [screenCart])

    return(
        <Container> 
        <div className="IconBox">
            <div className="SpanBackground"><span>{cartIndex}</span></div>
            <Icon_Receipt/>
        </div>
        </Container>
 )
}