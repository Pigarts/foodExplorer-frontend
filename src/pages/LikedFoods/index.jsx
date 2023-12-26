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
  const [displayedFoods, setDisplayedFoods] = useState([]);
  const { user } = useAuth();
  const navigate = useNavigate();

  function handleDetails(id) {
    navigate(`/food/${id}`);
  }

  useEffect(() => {
    async function fetchAllFood() {
      const response = await api.get(`/foods/likeds?user=${user.id}`);
      setFoods(response.data);
      setDisplayedFoods(response.data);
    }

    fetchAllFood();
  }, [user.id]);

  useEffect(() => {
    setDisplayedFoods(foods);
  }, [foods]);

  async function handleRemoveItem(id) {
    await api.delete(`/foods/unLike?user=${user.id}&food=${id}`);
    const updatedDisplayedFoods = displayedFoods.filter((food) => food.id !== id);
    setDisplayedFoods(updatedDisplayedFoods);
  }

  return (
    <Container>
      <Header />
      <Content>
        
        {
          displayedFoods.length >= 1 ?<> <h2>Meus favoritos</h2> <FoodContainer>
          {displayedFoods &&
            displayedFoods.map((food, index) => (
              <SimpleFoodCard
                key={index}
                imageSrc={`${api.defaults.baseURL}/files/${food.img}`}
                title={`${food.name}`}
                id={food.id}
                onImageClick={() => handleDetails(food.id)}
                unLike={() => handleRemoveItem(food.id)}
              />
            ))}
        </FoodContainer> </>: <div className="center"> <h2>Nenhum item favoritado</h2></div> 
        }
        
      </Content>
      <Footer />
    </Container>
  );
}