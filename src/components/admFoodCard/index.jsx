import {  CardImage, ImgButton, CardContent, CardTitle, CardDescription } from "./styles";
import { IconButton } from "../IconButton";
import { Icon_Edit } from "../Icons";
import { useNavigate } from "react-router-dom"



export function AdmFoodCard({ imageSrc, title, price, onImageClick, id }) {

        const navigate = useNavigate()

        function handleEditButton() {
                navigate(`/editFood/${id}`)

        }
        

        return (
                <CardContent>
                <IconButton onClick={handleEditButton} className="like" icon={Icon_Edit}/>
                <ImgButton onClick={onImageClick}>
                <CardImage src={imageSrc} alt="Imagem da comida" />
                </ImgButton>
                <CardTitle>{title}</CardTitle>
                <CardDescription>{price}</CardDescription>
                </CardContent>
)
}