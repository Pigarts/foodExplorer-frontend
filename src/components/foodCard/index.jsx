import {  CardImage, ImgButton, CardContent, CardTitle, CardDescription, CardPrice } from "./styles";
import { Counter } from "../../components/counter"
import { Button } from "../../components/button"
import { useState, useEffect } from "react";
import { IconButton } from "../IconButton";
import { Icon_Outline_heart, Icon_Full_heart, Icon_Edit } from "../Icons";
import { useAuth } from "../../hooks/auth";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";


export function FoodCard({ imageSrc, title, description, price, id, onImageClick, foodImg, foodName }) {
        const [foodsValue, setFoodsValue] = useState(1);
        const [likeIcon, setLikeIcon] = useState(false);
        const [likeds, setLikeds] = useState([]);
        const  { user, addToCart, removeFromCart, screenCart, cartData }  = useAuth();
        const navigate = useNavigate()

        async function handleLikeButton() {       
                await api.post(`/foods/like`, {food: id})
                setLikeIcon(true);                  
                if (likeIcon === true) {
                await api.delete(`/foods/unLike?user=${user.id}&food=${id}`); 
                setLikeIcon(false);
                }
            }

        function handleEditButton() {
                navigate(`/editFood/${id}`)

        }
        function handleFoodsValueChange(newValue) {
                setFoodsValue(newValue);
        }

        function handleAddButton() {
                
                let remove = price.replace("R$ ", "")
                let replace = remove.replace(",", ".")
                let numberPrice = parseFloat(replace)
                
                const item = {
                        name: foodName,
                        quantity: Number(foodsValue),
                        price: price,
                        total_price: ( numberPrice * Number(foodsValue)),
                        img: foodImg,
                        id
                }
                
                if (Number(foodsValue) == 0) {
                        removeFromCart(item);         
                        return
                }
                
                addToCart(item)
               
        }

        const content = {
                '0': <>
                        <IconButton onClick={handleLikeButton} className="like" icon={likeIcon ? Icon_Full_heart : Icon_Outline_heart }/>
                        <ImgButton onClick={onImageClick}>
                        <CardImage src={imageSrc} alt="Imagem da comida" />
                        </ImgButton>
                        <CardTitle>{title}</CardTitle>
                        <CardDescription>{description}</CardDescription>
                        <CardPrice>{price}</CardPrice>
                        <div className="line">
                           <Counter foods={foodsValue} onFoodsChange={handleFoodsValueChange}/>
                           <Button onClick={handleAddButton} title={foodsValue === 0 ? "Remover" : "Adicionar" }/>     
                        </div>
                
                 </>,
                '1': <>
                  
                <IconButton onClick={handleEditButton} className="edit" icon={Icon_Edit}/>
                <ImgButton onClick={onImageClick}>
                <CardImage src={imageSrc} alt="Imagem da comida" />
                </ImgButton>
                <CardTitle>{title}</CardTitle>
                <CardDescription>{description}</CardDescription>
                <CardPrice>{price}</CardPrice>
                
                </>
              };

        useEffect(() => {
                if(!user.role === "adm") {
                async function fetchLikeds() {
                        const response = await api.get(`/foods/likeds`);
                        setLikeds(response.data);
                        }
                        fetchLikeds();
                }
        }, []);
        
        useEffect(() => {
                likeds.forEach(item => {
                  if (item.id === id) {
                    setLikeIcon(true);
                  }
                });
        }, [likeds, id]);

        return (
                <CardContent>
                {content[ user.role === "adm" ? "1" : "0"]}
                </CardContent>
)
}