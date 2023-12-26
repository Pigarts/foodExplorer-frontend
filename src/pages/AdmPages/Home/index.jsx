import { Container, Content, CardBox, FoodContainer } from "./styles"
import { Card } from "../../../components/card"
import { Header } from "../../../components/header"
import { Section } from "../../../components/section"
import cardImg from "../../../assets/pngegg2.png"
import { Footer } from "../../../components/footer"
import { useNavigate } from "react-router-dom"
import { AdmFoodCard } from "../../../components/admFoodCard"
import { useEffect, useState } from "react"
import { api } from "../../../services/api"

export function Home() {
    
    const [categories, setCategories] = useState([]);
    const [foods, setFoods] = useState({});
    const navigate = useNavigate()

    const desiredOrder = ["Refeições", "Saladas", "Pratos principais", "Sobremesas", "Bebidas"];

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
  desiredOrder
    .filter(category => categories.includes(category))
    .map((category, index) => {
      const filteredFoods = Array.isArray(foods) ? foods.filter((food) => food.category === category) : [];

      return (
        <Section key={index} title={category}>
          {filteredFoods.map((filteredFood, foodIndex) => (
            <AdmFoodCard
              key={foodIndex}
              imageSrc={`${api.defaults.baseURL}/files/${filteredFood.img}`}
              title={`${filteredFood.name} >`}
              description={filteredFood.descriptions}
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