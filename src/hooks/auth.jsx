import { createContext, useContext, useState, useEffect } from "react";
import { api } from "../services/api"
export const AuthContext = createContext({});


function AuthProvider({children}) {

    const [data, setData] = useState({});
    const [screenCart, setScreenCart] = useState([]);
    const [payment, setPayment] = useState("0");

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

    function signOut() {
        localStorage.removeItem("@foodExplorer:token");
        localStorage.removeItem("@foodExplorer:user");
        localStorage.removeItem("@foodExplorer:cart")
        setData({});
    }

    let cart = JSON.parse(localStorage.getItem("@foodExplorer:cart")) || [];
    
    function addToCart(item) {
        const existingItemIndex = cart.findIndex(cartItem => cartItem.id === item.id);
        
        if (existingItemIndex !== -1) {
            cart[existingItemIndex].quantity += item.quantity;
        } else {
            cart.push(item);
        }
        localStorage.setItem('@foodExplorer:cart', JSON.stringify(cart));
        setScreenCart(cart)
    }
    
    function removeFromCart(itemToRemove) {
        cart = cart.filter(item => item.id !== itemToRemove.id);
        localStorage.setItem('@foodExplorer:cart', JSON.stringify(cart));
        setScreenCart(cart)
    }
    
    function clearCart() {
        cart = []
        localStorage.setItem('@foodExplorer:cart', JSON.stringify(cart));
        setScreenCart(cart)
    }

    async function pay(paymentMethod) {
        const totalCartValue = screenCart.reduce((total, item) => total + item.total_price, 0);
        const cartValue = totalCartValue.toFixed(2);
        const data = {
            paymentMethod, order: screenCart, cartValue
        }
        setPayment("1")
        try {
            const response = await api.post("/orders", { data });
                    if (response.status == 201) {
                    async function getStatus() {
                        try {
                            const response = await api.get("/orders/orderstatus");
                            const status = response.data;

                            if (status === "Preparando") {
                                setPayment("2")
                            }

                            if (status === "Entregue") {
                                setPayment("3")
                                clearInterval(fetchInterval);
                                clearCart()
                            }

                        } catch (error) {
                            console.error("Erro ao obter o status:", error);
                        }
                    }
                    
                    let fetchInterval = setInterval(getStatus, 1000);
                    }  

          } catch (error) {
            console.error("Erro ao fazer a requisição:", error);
          }
    }

    useEffect(() => {
        const token = localStorage.getItem("@foodExplorer:token")
        const user = localStorage.getItem("@foodExplorer:user")
        if(!localStorage.getItem('@foodExplorer:cart')) {
            localStorage.setItem('@foodExplorer:cart', JSON.stringify([]))
        }
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

    useEffect(() => {
        function attCart() {
            setScreenCart(JSON.parse(cart))
        }
        attCart()
    }, [])
    return(
        <AuthContext.Provider value={{  signIn, signOut, pay, payment, addToCart, removeFromCart, clearCart, user: data.user, screenCart}}>
            {children}
        </AuthContext.Provider>
    )
}

function useAuth() {
    const context = useContext(AuthContext);
    return context
}

export { AuthProvider, useAuth };