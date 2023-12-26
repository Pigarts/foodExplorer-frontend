import { Header } from "../../components/header";
import { Container, Content, Card } from "./styles";
import { Footer } from "../../components/footer";
import { useEffect, useState } from "react";
import { api } from "../../services/api";

export function OrdersHistory() {
  const [orders, setOrders] = useState([]);
  
  function transformStringData(dataString) {
    const [data, hora] = dataString.split(" ");
    const [ano, mes, dia] = data.split("-");
    const [horaFormatada, minutos] = hora.split(":");
    return `${dia}/${mes} às ${horaFormatada}:${minutos}`;
  }
  
  useEffect(() => {
    async function fetchAllOrders() {
      try {
        const response = await api.get("/orders/alluserorders");
        const modifiedOrders = response.data.map((order) => ({
          ...order,
          id: order.id.toString().padStart(8, "0"),
          formattedDate: transformStringData(order.created_at),
        }));
        console.log(modifiedOrders);
        setOrders(modifiedOrders);
      } catch (error) {
        console.error("Erro ao buscar os pedidos:", error);
      }
    }
    fetchAllOrders();
  }, []);
  
  return (
    <Container>
      <Header />
      <Content>
        <h2 className="desktop">Histórico de pedidos</h2>
        <h2 className="mobile">Pedidos</h2>

        <table>
          <thead>
            <tr><th>Status</th> <th>Código</th> <th>Detalhamento </th> <th>Data e hora</th></tr>
          </thead>
          <tbody>
            {orders &&
              orders.map((order, index) => (
                <tr key={index}>
                  <td className="orderStatus"><div className="flex"><div className={`${order.status}`}></div>{order.status}</div></td>
                  <td className="id">{order.id}</td>
                  <td className="details">{order.details}</td>
                  <td className="date">{order.formattedDate}</td>
                </tr>
              ))
              }
          </tbody>
        </table>
        {orders &&
              orders.map((order, index) => (
                <Card key={index}>
                  <div className="flex">
                    <span>{order.id}</span> 
                    <div className="flex2">
                      <div className={`${order.status}`}/> {order.status}
                    </div>
                    <span>{order.formattedDate}</span>
                  </div>
                  <p>{order.details}</p>
                </Card>
              ))
              }

      </Content>
      <Footer />
    </Container>
  );
}