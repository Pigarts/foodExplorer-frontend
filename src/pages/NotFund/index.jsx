import { Header } from "../../components/header";
import { Container, Content } from "./styles";
import { Footer } from "../../components/footer";
import { Icon_Left_Arrow } from "../../components/Icons";
import { IconButton } from "../../components/IconButton";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/auth";

export function NotFund() {
  const  { user }  = useAuth();
  const navigate = useNavigate()
  
  return (
    <Container>
      {
        user &&
        <Header/>
      }
      <Content>
        <div className="center">

        <h2>~ 404 ~</h2>
        <h3>Pagina não encontrada</h3>

        <IconButton className="backButton" onClick={() => navigate("/")} icon={Icon_Left_Arrow} title="Voltar para o inicio"/>
        </div>

      </Content>
      {
        user &&
        <Footer />
      }
    </Container>
  );
}