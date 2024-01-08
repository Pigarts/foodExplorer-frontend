import { useState, useEffect } from "react"
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
import { Alert } from "../../../components/alert"

export function NewFood() {
    const [ imgFile, setImgFile ] = useState("")
    const [ name, setName ] = useState("")
    const [ category, setCategory ] = useState("")
    const [ price, setPrice ] = useState("")
    const [ description, setDescription ] = useState('');
    const [ ingredients, setIngredients ] = useState([])
    const [ newIngredients, setNewIngredients ] = useState("")
    const [ alert, setAlert ] = useState(false)
    const [ alertType, setAlertType ] = useState("error")
    const [ AlertMessage, setAlertMessage ] = useState("")

    const navigate = useNavigate();

    function showAlert(message, type) {
        setAlertMessage(message);
        setAlertType(type);
        setAlert(true);
      }

    function handleAddIngredients(){
        if(newIngredients.length < 1) {
          showAlert("tag sem cnteúdo", "bad") 
          return 
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
    
    async function handleSaveButton() {
        if(!imgFile) {return  showAlert("O prato precisa de uma imagem", "bad") }
        if(!name) {return  showAlert("O prato precisa de um nome", "bad") }
        if(!category || category == 0) {return  showAlert("Selecione a categoria do prato", "bad") }
        if(ingredients.length == 0) {return  showAlert("É preciso informar os ingredientes do prato", "bad") }
        if(!price) {return  showAlert("O prato precisa de um preço", "bad") }  
        if(!description) {return  showAlert("O prato precisa de uma descrição", "bad") }
        try {
            const food = { category, name, descriptions: description, ingredients, price, img: imgFile };
            const formData = new FormData();
            formData.append("img", imgFile);
            formData.append("food", JSON.stringify(food));
            const response = await api.post("/foods/create", formData);
            showAlert("Prato criado com sucesso!", "nice")
        } catch (error) {
            if (error.response) {
                showAlert(error.response.data.message, "bad")
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
        { label: 'Sobremesas', value: 'Sobremesas' },
        { label: 'Bebidas', value: 'Bebidas' },
    ];

     useEffect(() => {
        let timeoutId;

        if (alert) {
          timeoutId = setTimeout(() => {setAlert(false);}, 2000);}
        return () => clearTimeout(timeoutId);
    }, [alert]);

    return (
        <Container>
         <Header/>
         <Content>
         <IconButton className="backButton" onClick={goBack} icon={Icon_Left_Arrow} title="Voltar"/>
         <h1>Novo prato</h1>
            <Form>
                <div className="line1">
                <div className="column">
                    <span>Imagem do prato</span>
                    <ImgUpload className={imgFile ? "done" : ""}>
                        <label htmlFor="uploadImg">
                        {imgFile ? <Icon_Done/> :<Icon_Upload/> } 
                        <span>{imgFile ? "Imagem selecionada" : "Selecione imagem"}</span>
                        <Input id="uploadImg" type="file" onChange={handleChangeFoodImg}/> 
                        </label>
                    </ImgUpload>
                    </div>
                    <Input title={"Nome"} placeholder="Ex.: Salada Ceasar" type="text"
                    onChange={e => setName(e.target.value)}/> 
                    <Select options={options} onChange={handleSelectChange} title={"Categoria"}/>
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
                            <TagAddBox key={String(index)} value={ingredients} onClick={() => handleRemoveTags(ingredients)}
                            />
                            ))
                        }
                </TagBox>
                </div>
                <Input title={"Preço"} placeholder="R$ 00.00" type="number"
                onChange={e => setPrice(e.target.value)}/> 
            </div>
            <TextBox title={"Descrição"}
            placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
            onChange={e => setDescription(e.target.value)}/>
             
            <Button className="save" onClick={handleSaveButton} title="Salvar novo prato" loading={false}/>
            <Alert title={AlertMessage} visible={alert} colorOption={alertType} />
            </Form>
         </Content>
         <Footer/>
        </Container>
    )
}