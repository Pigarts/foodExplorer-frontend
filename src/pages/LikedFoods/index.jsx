import { Header } from "../../components/header"
import { Container, Content, FoodContainer, CardContent ,CardImage, ImgButton, CardTitle } from "./styles"
import { Footer } from "../../components/footer"
import { useEffect, useState } from "react"
import { api } from "../../services/api"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../../hooks/auth"
import { TextButton } from "../../components/textButton"


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
              <CardContent key={index}>
                <ImgButton onClick={() => handleDetails(food.id)}>
                <CardImage src={`${api.defaults.baseURL}/files/${food.img}`} alt="Imagem da comida" />
                </ImgButton>
                <div className="column">
                <CardTitle>{`${food.name}`}</CardTitle>
                <TextButton title={"Remover dos Favoritos"} onClick={() => handleRemoveItem(food.id)}/>
                </div>
                </CardContent>
)
            )}
        </FoodContainer> </>: <div className="center"> <h2>Nenhum item favoritado</h2></div> 
        }
      </Content>
      <Footer />
    </Container>
  );
}