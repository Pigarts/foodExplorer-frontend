import { Header } from "../../components/header"
import { Container, Content, FoodContainer } from "./styles"
import { SimpleFoodCard } from "../../components/simpleFoodCard"
import { FoodCard } from "../../components/foodCard"
import { Footer } from "../../components/footer"
import { useEffect, useState } from "react"
import { api } from "../../services/api"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../../hooks/auth"


export function LikedFoods() {
  const [foods, setFoods] = useState([]);
  const { user } = useAuth()
  const navigate = useNavigate()


    function handleDetails(id) {
      navigate(`/food/${id}`)
    }

      useEffect(() => {
        async function fetchAllFood() {
            const response = await api.get(`/foods/likeds?user=${user.id}`)
            setFoods(response.data)
        }
        fetchAllFood()
      }, [foods])
    
    return (
        <Container>
            <Header/>
            <Content>
            <h2>Meus favoritos</h2>
            <FoodContainer>
            {
              foods &&(
              foods.map((food, index) => (
                      <SimpleFoodCard
                        key={index}
                        imageSrc={`${api.defaults.baseURL}/files/${food.img}`}
                        title={`${food.name}`}
                        id={food.id}
                        onImageClick={() => handleDetails(food.id)}
                      />
                    )))
            }
            </FoodContainer>
            </Content>
         <Footer/>
        </Container>
    )
}