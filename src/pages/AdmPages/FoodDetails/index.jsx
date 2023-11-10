import { useEffect, useState } from "react"
import { Container, FoodContainer, Content, FoodImage, Tags } from "./styles"
import { Header } from "../../../components/header"
import { IconButton } from "../../../components/IconButton"
import { Icon_Left_Arrow } from "../../../components/Icons"
import { Button } from "../../../components/button"
import { Tag } from "../../../components/tags"
import { Footer } from "../../../components/footer"
import { api } from "../../../services/api"
import { useNavigate, useParams} from "react-router-dom"

export function FoodDetails() {
    const [food, setFood] = useState({});

    const navigate = useNavigate()
    const params = useParams()

    function handleEditFood() {
        navigate(`/editFood/${params.id}`)
    }

    function goBack() {
        navigate("/")
    }

    useEffect(() => {
        async function fetchFood() {
            const response = await api.get(`/foods/id/${params.id}`)
            setFood(response.data)
        }
        fetchFood()
    }, [])
    
    return (
        <Container>
            <Header/>
                <Content>
                    <IconButton className="backButton" onClick={() => goBack()} icon={Icon_Left_Arrow} title="Voltar"/>
                    <FoodContainer>

                    <FoodImage src={`${api.defaults.baseURL}/files/${food.img}`} alt="Card" />
                    <h1>{food.name}</h1>
                    <p>{food.descriptions}.</p>
                    <Tags>
                        {
                        food.foodIngredients && (
                        food.foodIngredients.map((ingredient) => (
                            <Tag key={ingredient.id} title={ingredient.name}/>
                            )
                        ))}
                    </Tags>

                    <div className="addLine">
                    <Button  title={ `Editar prato`} onClick={handleEditFood}/>
                    </div>
                    </FoodContainer>
                </Content>
            <Footer/>
        </Container>
    )
}