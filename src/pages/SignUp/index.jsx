import { Container, LogoBox, Form } from "./styles"
import { Logo } from "../../components/Logo"
import {Input} from "../../components/input"
import {Button} from "../../components/button"
import { TextButton } from "../../components/textButton"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import { api } from "../../services/api"



export function SignUp() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate =  useNavigate()

    function handleLogin() {
        navigate("/")
    }

    function handleSignUp(e) {
        e.preventDefault()
        
        if(!name || !email || !password) {
            console.log("name")
            alert("Preencha todos os campos")
            return
        }

        api.post("/users", {name, email, password})
        .then(() => {
            alert("Usuario cadastrado com sucesso!")
            navigate("/");
        })
        .catch(error => {
            if (error.response) {
                alert(error.response.data.message), console.log("erro 1");
            } else{ 
                alert("Não foi possivel cadastrar"), console.log("erro 2");
             }
            });
    }

    return (
        <Container>
            <LogoBox>
            <Logo/>
            </LogoBox>
            <Form>
            <h1>Crie sua conta</h1>
            <Input title="Seu nome" placeholder="Exemplo: Maria da Silva"
            onChange={e => setName(e.target.value)}/>
            <Input title="Email" placeholder="Exemplo: exemplo@exemplo.com.br"
            onChange={e => setEmail(e.target.value)}/>
            <Input type="password" title="Senha" placeholder="No mínimo 6 caracteres"
            onChange={e => setPassword(e.target.value)}/>
            <Button title="Cadastrar"
            onClick={handleSignUp}/>
            <TextButton onClick={() => handleLogin()} title="Já tenho uma conta"/>
            </Form>
        </Container>
    )
}