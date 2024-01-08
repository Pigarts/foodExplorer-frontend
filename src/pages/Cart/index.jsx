import { Header } from "../../components/header"
import { Container, Content, FoodContainer, FoodCard } from "./styles"
import { Footer } from "../../components/footer"
import { useEffect, useState } from "react"
import { api } from "../../services/api"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../../hooks/auth"
import { TextButton } from "../../components/textButton"
import { Pay } from "../../components/Pay"
import { Button } from "../../components/button"

export function Cart() {
  const [ foods, setFoods ] = useState([]);
  const [ cartValue, setCartValue ] = useState(0);
  const { screenCart, removeFromCart, payment } = useAuth()
  const [ paymentPageStatus, setPaymentPageStatus ] = useState("0");
  const navigate = useNavigate()

    function handleDetails(id) {
      navigate(`/food/${id}`)
    }

    function handleNextButton() {
      setPaymentPageStatus("1")
    }

    const content = {
    '0': <>
     {
      screenCart&&
      screenCart.length > 0 ? <>
      <div className="orders">
        <h2>Meu pedido</h2>
  <FoodContainer>
    
    {
      foods &&(
        foods.map((food, index) => (
        <FoodCard key={index} >
          <img onClick={() => handleDetails(food.id)} src={`${api.defaults.baseURL}/files/${food.img}`} alt="imagem do prato" />
          <div className="cardLine">
            <div>
            <p className="name">{`${food.quantity} x ${food.name}`}</p> <span className="price">{`R$ ${food.total_price.toFixed(2)}`}</span>
            </div>
            <TextButton title={"Excluir"} onClick={() => removeFromCart(food)}/>
          </div>
        </FoodCard>
        )))
    }
    <p>Total: R$ {cartValue}</p>
    <Button className="next" title={"Avançar"} onClick={handleNextButton}/>
  </FoodContainer>
       </div>
       <div className="payment"><h2>Pagamento</h2>
       <Pay/>
       </div>
      </> : <> <div className="center"> <h2>Nenhum item no carrinho</h2> </div></> 
     
    }  
    </>,
    '1': <>
      <Pay/>
    </>
  };
  
    useEffect(() => {
        async function fetchAllFood() {
          setFoods(screenCart)
        }
        fetchAllFood()
        const totalCartValue = screenCart.reduce((total, item) => total + item.total_price, 0);

        setCartValue(totalCartValue.toFixed(2));
    }, [screenCart])

    return (
        <Container>
            <Header/>
            <Content>
            {content[paymentPageStatus]}
            </Content>
         <Footer/>
        </Container>
    )
}