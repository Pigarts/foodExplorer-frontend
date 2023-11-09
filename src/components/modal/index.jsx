
import { Container } from "./styles"
import { useState } from "react"

import {  } from "../Icons"

export function Modal({ title, children }) {
    const [isOpen, setIsOpen] = useState(true);
   
    function open() {
        setIsOpen()
    }
    return (
        <Container>
            <p>{title}</p>
            {children}
            
        </Container>
    )
}