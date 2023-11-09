import { Container, Number } from "./styles"
import { IconButton } from "../IconButton"
import { Icon_Minus, Icon_Plus } from "../Icons"
import { useState } from "react"

export function Counter({foods, onFoodsChange}) {
    
    function handlePlusButton() {
        onFoodsChange(foods + 1);
    }
    function handleMinusButton() {
        if (foods <= 0) {
            return;
          }
          onFoodsChange(foods - 1);
        }

    const formattedFoods = foods < 10 ? `0${foods}` : foods;

    return (
        <Container>
            <IconButton onClick={handleMinusButton} icon={Icon_Minus}/> <Number>{formattedFoods}</Number> <IconButton onClick={handlePlusButton} icon={Icon_Plus}/>
        </Container>
    )
}