import { Button } from "../button"
import { Container } from "./styles"
import { Icon_Pix, Icon_Card, Icon_Receipt, Icon_Clock  ,Icon_Check  ,Icon_Fork } from "../Icons"
import { useState, useEffect } from 'react';
import { Input } from "../input"
import { useAuth } from "../../hooks/auth";
import QRCode from 'qrcode';

export function Pay() {
    const [selectedButton, setSelectedButton] = useState("card");
    const [qrCodeURL, setQrCodeURL] = useState('');
    const { screenCart, pay, payment, } = useAuth()
    const [cartValue, setCartValue ] = useState([])
    const [cardNumber, setCardNumber] = useState('');
    const [expiry, setExpiry] = useState('');
    const [cvc, setCvc] = useState('');
    
    const handleCardNumberChange = (e) => {
        const inputValue = e.target.value.replace(/[^0-9]/g, '');
        let formattedValue = inputValue.slice(0, 16);
        if (/^\d{4}/.test(formattedValue)) {
          formattedValue = formattedValue.replace(/(\d{4})/g, '$1-').slice(0, 19);;
        }
        setCardNumber(formattedValue);
      };

      const handleExpiryChange = (e) => {
        const inputValue = e.target.value.replace(/[^0-9]/g, '');
        let formattedValue = inputValue.slice(0, 4);
        if (/^\d{4}/.test(formattedValue)) {
          formattedValue = formattedValue.replace(/(\d{2})/g, '$1/').slice(0, 5);;
        }
        setExpiry(formattedValue.slice(0, 5));
      };
    
      const handleCvcChange = (e) => {
        const inputValue = e.target.value.replace(/[^0-9]/g, '');
        let formattedValue = inputValue.slice(0, 3);
        if (/^\d{4}/.test(formattedValue)) {
          formattedValue = formattedValue.slice(0, 3);;
        }
        setCvc(formattedValue);
      };

    function handleSelected(id) {
        setSelectedButton(id)
    }

    async function handlePayButton(event) {
      event.preventDefault()
      const cardInfos = {
        cardNumber: cardNumber.replace(new RegExp("-", 'g'), ""), 
        expiry: expiry.replace(new RegExp("/", 'g'), ""), 
        cvc,
      }

      pay(cardInfos)
    }          
    
    const content = {
        '0': <>{ 
            selectedButton == "pix" ? <img src={qrCodeURL} onClick={() => {pay("pix")}} alt="qrCode para pagamento via pix" title="Clique para simular confirmação de pagamento" /> : 
            <>
              <form action="">
                <div className="credit">
            <Input
        required 
        title={"Número do Cartão"}
        value={cardNumber}
        onChange={handleCardNumberChange}
      />
      <div className="line">
        <Input
          required 
          title={"Validade"}
          value={expiry}
          onChange={handleExpiryChange}
        />
        <Input
          required 
          title={"CVC"}
          value={cvc}
          onChange={handleCvcChange}
        />
            </div>
            <Button preventdefault="true" type="submit" icon={Icon_Receipt} title={"Finalizar pagamento"} onClick={handlePayButton}/>
                </div>
              </form>
            </>
        }</>,
        '1': <> <div className="status">
            <Icon_Clock/> <h3>Aguardando pagamento no caixa</h3></div> </>,
        '2': <> <div className="status">
            <Icon_Check/> <h3>Pagamento aprovado!</h3></div> </>,
        '3': <> <div className="status">
            <Icon_Fork/> <h3>Pedido entregue!</h3></div> </>,
      };

    useEffect(() => {
        const totalCartValue = screenCart.reduce((total, item) => total + item.total_price, 0);
        setCartValue(totalCartValue.toFixed(2));
      }, [screenCart])

    useEffect(() => {
        const dados = `valor do carrinho: ${cartValue}. 
        Como o carrinho de compras foi projetado para usar o local storage, a interação por outros dispositivos, no caso o leitor de qr code, fica prejudicada/ou dificultada
                      `;
    
        const opcoes = {
          errorCorrectionLevel: 'H',
          type: 'image/png',
          quality: 0.92,
          margin: 1,
          color: {
            dark: '#000000',
            light: '#ffffff'
          }
        };
    
        QRCode.toDataURL(dados, opcoes, (err, url) => {
          if (err) throw err;
          setQrCodeURL(url);
        });
      }, [screenCart]);
    return (
        <Container>
            <div className="method">
            <Button className={selectedButton == 'pix'  ? 'selected' : 'pix'} icon={Icon_Pix} title={"Pix"} onClick={() => handleSelected("pix")}/>  
            <Button className={selectedButton == 'card'  ? 'selected' : 'card'} icon={Icon_Card} title={`Crédito`} onClick={() => handleSelected("card")}/>
            </div>
         
            <div className="payment">
                {content[payment]}
            </div>
        </Container>
    )
}