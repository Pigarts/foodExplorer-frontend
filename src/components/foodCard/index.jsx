import {  CardImage, ImgButton, CardContent, CardTitle, CardDescription } from "./styles";
import { Counter } from "../../components/counter"
import { Button } from "../../components/button"
import { useState } from "react";
import { IconButton } from "../IconButton";
import { Icon_Outline_heart, Icon_Full_heart } from "../Icons";
import { useNavigate } from "react-router-dom"



export function FoodCard({ imageSrc, title, price, id, onImageClick  }) {
        const [foodsValue, setFoodsValue] = useState(0);
        const [likeIcon, setLikeIcon] = useState(false);
        const [cart, setCart] = useState([]);
        

        


        const navigate = useNavigate()

        function handleFoodsValueChange(newValue) {
                setFoodsValue(newValue);
        }

        function handleButtonDetails(id) {
                navigate(`/food/`)
        }

        function handleAddButton() {
                if (Number(foodsValue) == 0) {
                        return
                }

                let remove = price.replace("R$ ", "")
                let replace = remove.replace(",", ".")
                let numberPrice = parseFloat(replace)
                const added = {
                        name: title,
                        quantidade: Number(foodsValue),
                        price: price,
                        total_price: ( numberPrice * Number(foodsValue)),
                        id
                }
                
                console.log(added)
                return added;
        }

        function handleLikeButton() {
                setLikeIcon(!likeIcon)
        }

        return (
                <CardContent>
                <IconButton onClick={handleLikeButton} className="like" icon={likeIcon ? Icon_Full_heart : Icon_Outline_heart }/>
                <ImgButton onClick={onImageClick}>
                <CardImage src={imageSrc} alt="Imagem da comida" />
                </ImgButton>
                <CardTitle>{title}</CardTitle>
                <CardDescription>{price}</CardDescription>
                <Counter foods={foodsValue} onFoodsChange={handleFoodsValueChange}/>
                <Button onClick={handleAddButton} title="Adicionar"/>
                </CardContent>
)
}