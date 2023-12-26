import { Container, Mobile, Desktop, FoodBox, SearchBox } from "./styles";
import { Logo } from "../Logo";
import { IconButton } from "../IconButton";
import { Receipt } from "../receipt"
import { NavBar } from "../navBar";
import { useNavigate } from "react-router-dom";
import { Search } from "../search"
import { Icon_LogOut, Icon_Receipt, Icon_search } from "../Icons";
import { Button } from "../button";
import { TextButton } from "../textButton";
import { useAuth } from "../../hooks/auth";
import { useState, useEffect } from "react";
import { api } from "../../services/api";
import { Tag } from "../tags"


export function Header() {
    const [ searchFoods, setSearchFoods] = useState([])
    const [ search, setSearch] = useState("")
    const [ cartIndex, setCartIndex ] = useState([])
    const { user, signOut, screenCart } = useAuth();

    const {}  = useAuth();
    const isAdmin = user.adm;
    const navigate = useNavigate()
        
    function handleSignOut() {
      navigate("/")
      signOut()
    }
    
    function handleDetails(id) {
      navigate(`/food/${id}`)
    }

    useEffect(() => {
      if(!screenCart || screenCart == "[]") {
        setCartIndex(0)
        return
      }
      setCartIndex(screenCart.length)
      return
    }, [screenCart])

    useEffect(() => {
      if(search.length > 0 ) {

            async function fetchFoods() {
                const response = await api.get(`/foods?search=${search}`);
                setSearchFoods(response.data);
                }
                fetchFoods()} else {
                  setSearchFoods("")
            }
            
      }, [search]);

    return(
    <Container> 
        <Mobile>
        <NavBar/> {!isAdmin ? <IconButton onClick={() => navigate("/")} icon={Logo}/> : <> <div className="admLogo"><IconButton onClick={() => navigate("/")} icon={Logo}/> <span>admin</span> </div> </>} {isAdmin ? <div></div> : <IconButton icon={Receipt} />}
        </Mobile>
        <Desktop>
        <IconButton onClick={() => navigate("/")} icon={Logo}/>
         <Search icon={Icon_search}
          placeholder="Busque por pratos ou ingredientes" 
          onChange={e => setSearch(e.target.value)}>
        </Search>
          { searchFoods && 
            <SearchBox>
              {
              searchFoods.map(searchFood => (
              <FoodBox key={searchFood.id} onClick={() => handleDetails(searchFood.id)}>
                <div className=""></div>
                <img  src={`${api.defaults.baseURL}/files/${searchFood.img}`} alt="imagem do prato"/>
                <div>
                <h2>{searchFood.name}</h2>
                 { searchFood.ingredient ? <><span>Ingrediente: </span>
                  <Tag title={searchFood.ingredient}/></>: <></> }
                </div>
              </FoodBox>
                ))
              }
            </SearchBox> 
          }
          <>{
          isAdmin ? <>  <TextButton className="ordersHistory" title={"Histórico de pedidos"} onClick={() => navigate("/ordershistory")}/> <Button  className="2 new" title={`Novo prato`} onClick={() => navigate("/newFood")}> </Button></> : 
           <>
           <TextButton className="likeds" title={"Meus favoritos"} onClick={() => navigate("/likeds")}/>
           <TextButton className="ordersHistory" title={"Histórico de pedidos"} onClick={() => navigate("/ordershistory")}/>
           <Button className="cart" onClick={() => navigate("/cart")} icon={Icon_Receipt} title={`Pedidos (${cartIndex})`}/></>
           }</>
           <IconButton icon={Icon_LogOut} onClick={handleSignOut}/>
        </Desktop>
     
    </Container>
 )
}