import { Header } from "../../components/header"
import { Container, Content, CardBox, FoodContainer } from "./styles"
import { Card } from "../../components/card"
import { FoodCard } from "../../components/foodCard"
import { Section } from "../../components/section"
import cardImg from "../../assets/pngegg2.png"
import foodImg from "../../assets/Dish.png"
import { Footer } from "../../components/footer"
import { useEffect, useState } from "react"
import { api } from "../../services/api"
import { useNavigate } from "react-router-dom"

export function Home() {
    const [categories, setCategories] = useState([]);
    const [foods, setFoods] = useState({});
    const navigate = useNavigate()

    function handleDetails(id) {
      navigate(`/food/${id}`)
    }
    

    useEffect(() => {
        async function fetchCategory() {
            const response = await api.get("/foods/categories")
            setCategories(response.data)
        }
        fetchCategory()
      }, [])

      useEffect(() => {
        async function fetchAllFood() {
            const response = await api.get(`/foods/allFoods`)
            setFoods(response.data)
        }
        fetchAllFood()
      }, [])
    
    return (
        <Container>
            <Header/>
            <Content>
                <CardBox>
                <Card 
                    imageSrc={cardImg}
                    title="Sabores inigualáveis"
                    description="Sinta o cuidado do preparo com ingredientes selecionados."
                    />
                    </CardBox>
            <FoodContainer>
            
            {
  categories &&
  categories.map((category, index) => {
    const filteredFoods = Array.isArray(foods) ? foods.filter((food) => food.category === category) : [];
    return (
      <Section key={index} title={category}>
        {filteredFoods.map((filteredFood, foodIndex) => (
          <FoodCard
            key={foodIndex}
            imageSrc={`${api.defaults.baseURL}/files/${filteredFood.img}`}
            title={filteredFood.name}
            price={`R$ ${filteredFood.price}`}
            id={filteredFood.id}
            onImageClick={() => handleDetails(filteredFood.id)}
          />
        ))}
      </Section>
    );
  })
}
            </FoodContainer>
            </Content>
         <Footer/>
        </Container>
    )
}