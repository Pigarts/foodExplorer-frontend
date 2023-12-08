import { createContext, useContext, useState, useEffect } from "react";
import { api } from "../services/api"
export const AuthContext = createContext({});


function AuthProvider({children}) {

    const [data, setData] = useState({});
    const [screenCart, setScreenCart] = useState([]);

    async function signIn({email, password}) {
        try {
            const response = await api.post("/sessions", {email, password})
            const {user, token} = response.data;
            localStorage.setItem("@foodExplorer:user",JSON.stringify(user));
            localStorage.setItem("@foodExplorer:token", token);
            
            api.defaults.headers.authorization = `bearer ${token}`
            setData({user, token})
        } catch(error) {
            if(error.response) {
                alert(error.response.data.error)
            } else {
                alert("Não foi possivel entrar")
            }
        }
    }

    let cart = JSON.parse(localStorage.getItem("@foodExplorer:cart")) || [];

    useEffect(() => {
        const token = localStorage.getItem("@foodExplorer:token")
        const user = localStorage.getItem("@foodExplorer:user")
        cart = localStorage.getItem("@foodExplorer:cart")

        if(token && user) {
            api.defaults.headers.common["authorization" ] = `Bearer ${token}`;
            
            setData(
                {
                    token,
                    user: JSON.parse(user),
                }
                )
            }
           
    }, [])

    function signOut() {
        localStorage.removeItem("@foodExplorer:token");
        localStorage.removeItem("@foodExplorer:user");
        localStorage.removeItem("@foodExplorer:cart")
        setData({});
    }

    function addToCart(item) {
        cart.push(item);
        localStorage.setItem('@foodExplorer:cart', JSON.stringify(cart));
        setScreenCart(cart)
    }

    function removeFromCart(itemToRemove) {
        cart = cart.filter(item => item.id !== itemToRemove.id);
        localStorage.setItem('@foodExplorer:cart', JSON.stringify(cart));
        setScreenCart(cart)
    }
    return(
        <AuthContext.Provider value={{signIn, signOut, addToCart, removeFromCart, user: data.user, cartData: data.cartData, screenCart}}>
            {children}
        </AuthContext.Provider>
    )
}

function useAuth() {
    const context = useContext(AuthContext);
    return context
}


export { AuthProvider, useAuth };