import { useEffect, useState } from "react"
import { Header } from "../../../components/header"
import { Container, Content, Form, TagBox, ImgUpload } from "./styles"
import { IconButton } from "../../../components/IconButton"
import { Icon_Left_Arrow, Icon_Upload, Icon_Done } from "../../../components/Icons"
import { Input } from "../../../components/input"
import { Footer } from "../../../components/footer"
import { Select } from "../../../components/select"
import { TagAddBox } from "../../../components/tagAddBox"
import { TextBox } from "../../../components/textBox"
import { Button } from "../../../components/button"
import { useNavigate, useParams } from "react-router-dom"
import { api } from "../../../services/api"
import { AlertError } from "../../../components/alertError"
import { NiceAlert } from "../../../components/niceAlert"

export function EditFood() {
    const [food, setFood] = useState(null)
    const [imgFile, setImgFile] = useState("")
    const [name, setName] = useState("")
    const [category, setCategory] = useState("")
    const [price, setPrice] = useState("")
    const [description, setDescription] = useState('');
    const [ingredients, setIngredients] = useState([])
    const [newIngredients, setNewIngredients] = useState("")
    const [error, setError] = useState(false)
    const [niceAlert, setNiceAlert] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")
    
    
    const navigate = useNavigate()
    const params = useParams()
    
    function showError(message, type) {
            if(type === "nice") {
                console.log("nice")
                setErrorMessage(message)
                setNiceAlert(true)

           setTimeout(function(){
            setNiceAlert(false)
           }, 2000);
           return
            }

           setErrorMessage(message)
           setError(true)

           setTimeout(function(){
              setError(false)
           }, 2000);
       }
    function goBack() {
        navigate(-1)
    }
    
    function handleAddIngredients(){
        if(newIngredients.length < 1) {
            return alert("tag sem cnteúdo")
        }
        setIngredients(prevState => [...prevState, newIngredients]);
        setNewIngredients("");
        console.log(ingredients)    
    }
    function handleRemoveIngredients(deleted) {
        setIngredients(prevState => [...prevState.filter(Ingredient => Ingredient !== deleted)]);
        console.log(ingredients)
    }
    
    function handleChangeFoodImg(event) {
        const file = event.target.files[0]
        setImgFile(file)
    }
    
    async function handleSaveButton() {
        if(!name) {return  showError("O prato precisa de um nome") }
        if(!category || category == 0) {return  showError("Selecione a categoria do prato") }
        if(ingredients.length == 0) {return  showError("É preciso informar os ingredientes do prato") }
        if(!price) {return  showError("O prato precisa de um preço") }  

        const updates = { 
            img: imgFile,
            name,
            category,
            price,
            descriptions: description,
            foodIngredients: ingredients
        }
        
        const updatedFood = Object.assign(food, updates);
        
        try {
                const formData = new FormData();
                formData.append("img", imgFile)
                formData.append("food", JSON.stringify(updatedFood))
                console.log(formData)
                const response = await api.put("/foods/update", formData)
                showError("Prato atualizado com sucesso!", "nice")
            } catch (error) {
                       if (error.response) {
                           showError(error.response.data.message)
                       } else {
                           console.error(error); 
                       }
                   }
    }     
    
    async function handleDeleteButton() {
        if(confirm("tem certeza que deseja excluir?") ) {
             try {
            const response = await api.delete(`/foods/delete/${params.id}`)
            navigate(-2)
                       } catch (error) {
                                  if (error.response) {
                                      showError(error.response.data.message)
                                  } else {
                                      console.error(error); 
                                  }
                              }}
        
       
    } 
    
    const options = [
        { label: '~SELECIONE~', value: '0' },
        { label: 'Refeições', value: 'Refeições' },
        { label: 'Pratos principais', value: 'Pratos principais' },
        { label: 'Saladas', value: 'Saladas' },
        { label: 'Bebidas', value: 'Bebidas' },
      
    ];
    
    useEffect(() => {
        async function fetchFood() {
            const response = await api.get(`/foods/id/${params.id}`)
            setFood(response.data)  
        }
        
        fetchFood() 
    }, [])

    useEffect(() => {
        if (food) {
            setImgFile(food.img)
            setName(food.name)
            setCategory(food.category)
            setPrice(food.price)
            setDescription(food.descriptions)
            setIngredients(food.foodIngredients.map(ingredient => ingredient.name));
        }
      }, [food]);
    return (
        <Container>
         <Header/>
         <Content>

         <IconButton className="backButton" onClick={goBack} icon={Icon_Left_Arrow} title="Voltar"/>
         <h1>Editar prato</h1>
         {food && (

            <Form>
                <div className="line1">
                    <ImgUpload className={imgFile ? "done" : ""}>
                        <label htmlFor="uploadImg">
                        {imgFile ? <Icon_Done/> :<Icon_Upload/> } 
                        <span>{imgFile ? "Imagem selecionada" : "Selecione imagem"}</span>
                        <Input id="uploadImg" type="file" onChange={handleChangeFoodImg}/> 
                        </label>
                    </ImgUpload>
                    <Input 
                    title={"Nome"}
                    placeholder="Ex.: Salada Ceasar"
                    defaultValue={food.name}
                    onChange={e => setName(e.target.value)}
                    /> 
                    <Select options={options} title={"Categoria"} 
                    defaultValue={ food.category} onChange={e => setCategory(e.target.value)}/> 
                </div>
                <div className="line2">
                    <div className="ingredients">
                        <span>Ingredientes</span>
                        <TagBox>
                        <TagAddBox 
                            $isNew 
                            placeholder="Adicionar"
                            value={newIngredients}
                            onChange={e => setNewIngredients(e.target.value)} 
                            onClick={handleAddIngredients}
                            />
                            {
                                
                                ingredients.map((ingredients, index)=>( 
                                    <TagAddBox key={String(index)} value={ingredients} onClick={() => handleRemoveIngredients(ingredients)}
                                />
                                ))
                            }
                        </TagBox>
                    </div>
                        <Input title={"Preço"} placeholder="R$ 00,00" type="number"
                        defaultValue={food.price}
                        onChange={e => setPrice(e.target.value)}/> 
                </div>
            <TextBox title={"Descrição"} placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
            defaultValue={food.descriptions}
            onChange={e => setDescription(e.target.value)}/>

            <div className="buttons">
            <Button onClick={handleDeleteButton} title="Excluir prato"/> <Button onClick={handleSaveButton} title="Salvar alterações" loading={false}/> 
            </div>
            <AlertError title={errorMessage} visible={error}/>
            <NiceAlert title={errorMessage} visible={niceAlert}/>
            </Form>
         )}
            
         </Content>
         <Footer/>
        </Container>
    )
}