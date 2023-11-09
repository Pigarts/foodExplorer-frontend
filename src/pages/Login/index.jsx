import { useState } from "react"
import { useAuth } from "../../hooks/auth"
import { Container, LogoBox, Form } from "./styles"
import { Logo } from "../../components/Logo"
import {Input} from "../../components/input"
import {Button} from "../../components/button"
import { TextButton } from "../../components/textButton"
import { useNavigate } from "react-router-dom"

export function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    
    const navigate =  useNavigate()

    const {signIn} = useAuth()
    
    function handleSignIn() {
        signIn({email, password})
    }

    function handleSignUp() {
        navigate("/signUp")
    }

    return (
        <Container>
            <LogoBox>
            <Logo/>
            </LogoBox>
            <Form>
             <h1>Faça login</h1>
            <Input title="Email" placeholder="Exemplo: exemplo@exemplo.com.br"
             onChange={e => setEmail(e.target.value)}/>
            <Input type="password" title="Senha" placeholder="No mínimo 6 caracteres"
             onChange={e => setPassword(e.target.value)}/>
            <Button title="Entrar"
            onClick={handleSignIn}/>
            <TextButton onClick={() => handleSignUp()} title="Criar uma conta"/>
            </Form>
        </Container>
    )
}