import { useEffect, useState } from "react"
import { Container, FoodContainer, Content, FoodImage, Tags } from "./styles"
import { Header } from "../../components/header"
import { IconButton } from "../../components/IconButton"
import { Icon_Left_Arrow, Icon_Receipt } from "../../components/Icons"
import { Button } from "../../components/button"
import { Counter } from "../../components/counter"
import { Tag } from "../../components/tags"
import { Footer } from "../../components/footer"
import { useNavigate, useParams} from "react-router-dom"
import { api } from "../../services/api"

export function FoodDetails() {
    
    const [food, setFood] = useState({});
    const [likeIcon, setLikeIcon] = useState(false);
    const [foodsValue, setFoodsValue] = useState(0);

    const params = useParams()
    
    const navigate = useNavigate()
    
    function goBack() {
        navigate(-1)
    }
    
    function handleFoodsValueChange(newValue) {
                setFoodsValue(newValue);
        }
    
    function handleAddButton() {
        if (Number(foodsValue) == 0) {
            return
    }

    let remove = food.price.replace("R$ ", "")
    let replace = remove.replace(",", ".")
    let numberPrice = parseFloat(replace)
    const added = {
            name: food.name,
            quantidade: Number(foodsValue),
            price: food.price,
            total_price: ( numberPrice * Number(foodsValue)),
            id: food.id
    }
    
    console.log(added)
    return added;
    }
    
    function handleLikeButton() {
        setLikeIcon(!likeIcon)
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
                  
                    {food && 
                        <FoodContainer>  
                        <FoodImage src={`${api.defaults.baseURL}/files/${food.img}`} alt="Card" />
                        <div className="foodInfos">
                        <h1>{food.name}</h1>
                        <p>{food.descriptions}.</p>
                        <Tags>
                            {
                            food.foodIngredients && (
                            food.foodIngredients.map((ingredient) => (
                                <Tag key={ingredient.id} title={ingredient.name}/>
                                )
                            ))
                            }
                        </Tags>
                        <div className="addLine">
                        <Counter foods={foodsValue} onFoodsChange={handleFoodsValueChange}/>
                        <Button className="order" icon={Icon_Receipt} onClick={handleAddButton} title={ `Incluir ∙ R$${(foodsValue * food.price)}` }/>
                        </div>
                        </div>
                        

                        </FoodContainer>
                    }
                </Content>
            <Footer/>
        </Container>
    )
}