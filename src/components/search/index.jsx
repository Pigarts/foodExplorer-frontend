import{ Container, SearchBox, FoodBox } from "./styles.js"
import { api } from "../../services/api.js";
import { useState, useEffect } from "react";
import { Tag } from "../tags/index.jsx";

export function Search({icon: Icon, ...rest}) {
    const [ searchFoods, setSearchFoods] = useState([])
    const [ search, setSearch] = useState("")

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
    return (
        <Container>
            {Icon && <Icon size={20}/>}
            
            <input {...rest} onChange={e => setSearch(e.target.value)} />
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
        </Container>
    )
}