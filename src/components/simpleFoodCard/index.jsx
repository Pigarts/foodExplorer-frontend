import {  CardImage, ImgButton, CardContent, CardTitle } from "./styles";
import { useState, useEffect } from "react";
import { useAuth } from "../../hooks/auth";
import { api } from "../../services/api";
import { TextButton } from "../textButton";


export function SimpleFoodCard({ imageSrc, title, id, onImageClick }) {


        const  { user }  = useAuth();

        async function unLike() {
                await api.delete(`/foods/unLike?user=${user.id}&food=${id}`)
        }
              
        return (
                <CardContent>
                <ImgButton onClick={onImageClick}>
                <CardImage src={imageSrc} alt="Imagem da comida" />
                </ImgButton>
                <div className="column">
                <CardTitle>{title}</CardTitle>
                <TextButton title={"Remover dos Favoritos"} onClick={unLike}/>
                </div>
                </CardContent>
)
}