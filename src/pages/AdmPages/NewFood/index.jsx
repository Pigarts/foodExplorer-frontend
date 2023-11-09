import { useState } from "react"
import { Container, Content, Form, TagBox, ImgUpload } from "./styles"
import { IconButton } from "../../../components/IconButton"
import { Icon_Left_Arrow, Icon_Upload, Icon_Done } from "../../../components/Icons"
import { Input } from "../../../components/input"
import { Footer } from "../../../components/footer"
import { Select } from "../../../components/select"
import { TagAddBox } from "../../../components/tagAddBox"
import { TextBox } from "../../../components/textBox"
import { Button } from "../../../components/button"
import { Header } from "../../../components/header"
import { useNavigate } from "react-router-dom"
import { api } from "../../../services/api"
import { AlertError } from "../../../components/alertError"
import { NiceAlert } from "../../../components/niceAlert"

export function NewFood() {
    const [imgFile, setImgFile] = useState("")
    const [name, setName] = useState("")
    const [category, setCategory] = useState("")
    const [price, setPrice] = useState("")
    const [description, setDescription] = useState('');
    const [ingredients, setIngredients] = useState([])
    const [newIngredients, setNewIngredients] = useState("")
    const [error, setError] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")
    const [niceAlert, setNiceAlert] = useState(false)




    const navigate = useNavigate()

    function handleAddIngredients(){
        if(newIngredients.length < 1) {
           return alert("tag sem cnteúdo")
        }
        setIngredients(prevState => [...prevState, newIngredients]);
        setNewIngredients("");    
    }

    function handleRemoveTags(deleted) {
        setIngredients(prevState => [...prevState.filter(tag => tag !== deleted)]);
    }
    
    function goBack() {
        navigate(-1)
    }
    
    const handleSelectChange = (event) => {
        setCategory(event.target.value);
    };
    
    function handleChangeFoodImg(event) {
        const file = event.target.files[0]
        setImgFile(file)
    }
    
    
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
    
    async function handleSaveButton() {
        if(!imgFile) {return  showError("O prato precisa de uma imagem") }
        if(!name) {return  showError("O prato precisa de um nome") }
        if(!category || category == 0) {return  showError("Selecione a categoria do prato") }
        if(ingredients.length == 0) {return  showError("É preciso informar os ingredientes do prato") }
        if(!price) {return  showError("O prato precisa de um preço") }  
        
        try {
            const food = { category, name, descriptions: description, ingredients, price, img: imgFile };
            const formData = new FormData();
            formData.append("img", imgFile);
            formData.append("food", JSON.stringify(food));
            const response = await api.post("/foods/create", formData);
            showError("Prato criado com sucesso!", "nice")
        } catch (error) {
            if (error.response) {
                showError(error.response.data.message)
            } else {
                console.error(error); 
            }
        }
        }
    const options = [
        { label: '~SELECIONE~', value: '0' },
        { label: 'Refeições', value: 'Refeições' },
        { label: 'Pratos principais', value: 'Pratos principais' },
        { label: 'Saladas', value: 'Saladas' },
        { label: 'Bebidas', value: 'Bebidas' },
        
    ];
    

    return (
        <Container>
         <Header/>
         <Content>
         <IconButton className="backButton" onClick={goBack} icon={Icon_Left_Arrow} title="Voltar"/>
         <h1>Novo prato</h1>
            <Form>
            <ImgUpload className={imgFile ? "done" : ""}>
                <label htmlFor="uploadImg">
                {imgFile ? <Icon_Done/> :<Icon_Upload/> } 
                <span>{imgFile ? "Imagem selecionada" : "Selecione imagem"}</span>
                <Input id="uploadImg" type="file"
                onChange={handleChangeFoodImg}/> 
                </label>
            </ImgUpload>
            <Input title={"Nome"} placeholder="Ex.: Salada Ceasar" type="text"
            onChange={e => setName(e.target.value)}/> 
            <Select options={options} onChange={handleSelectChange} title={"Categoria"}/>
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
                        <TagAddBox key={String(index)} value={ingredients} onClick={() => handleRemoveTags(ingredients)}
                        />
                        ))
                    }
            </TagBox>
            <Input title={"Preço"} placeholder="R$ 00.00" type="number"
            onChange={e => setPrice(e.target.value)}/> 
            <TextBox title={"Preço"} placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
            onChange={e => setDescription(e.target.value)}/>
            <AlertError title={errorMessage} visible={error}/>
            <NiceAlert title={errorMessage} visible={niceAlert}/>
            <Button onClick={handleSaveButton} title="Salvar novo prato" loading={false}/>

            </Form>
         </Content>
         <Footer/>
        </Container>
    )
}