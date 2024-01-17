import { Container } from "./styles";
import { useEffect, useState } from "react";
import {Icon_Receipt } from "../Icons";
import { useAuth } from "../../hooks/auth";
import { useNavigate } from "react-router-dom";

export function Receipt() {
    const [ cartIndex, setCartIndex ] = useState([])
    const { screenCart } = useAuth();
    const navigate = useNavigate()

    useEffect(() => {
      if(!screenCart || screenCart == "[]") {
        setCartIndex(0)
        return
      }
      setCartIndex(screenCart.length)
      return
    }, [screenCart])

    return(
        <Container onClick={() => navigate("/cart")}> 
        <div className="IconBox">
            <div className="SpanBackground"><span>{cartIndex}</span></div>
            <Icon_Receipt/>
        </div>
        </Container>
 )
}