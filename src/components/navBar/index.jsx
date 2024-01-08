import { SidebarWrapper, Button, Color, Content } from './styles';
import { useState } from "react";
import { Icon_Menu, Icon_Close, Icon_search } from "../Icons";
import { Search } from '../search';
import { Link } from "react-router-dom"
import { useNavigate } from 'react-router-dom';
import { useAuth } from "../../hooks/auth";




export function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const  {user, signOut}  = useAuth();
    const isAdmin = user.adm;
    
  function handleSignOut() {
    signOut()
  }
  
    return (
      <>
        <Button onClick={toggleSidebar}>{isOpen ? <><Icon_Close/> <span>Menu</span></>: <Icon_Menu/>}</Button>
        <SidebarWrapper $isOpen={isOpen}>
          <Color/>
          <Content>
            <Search icon={Icon_search} placeholder="Busque por pratos ou ingredientes"/>
          <ul>
            {
             isAdmin && <>
             <li><Link to="/newFood"><span>Novo prato</span></Link></li>
             </>

            }
            <li><Link to="/ordershistory"><span>Histórico de pedidos</span></Link></li>
            {
             !isAdmin && 
            <li><Link to="/likeds"><span>Meus favoritos</span></Link></li>
            }
            <li><Link onClick={handleSignOut} to="/"><span>Sair</span></Link></li>
          </ul>
          </Content>
        </SidebarWrapper>
      </>
    )
};