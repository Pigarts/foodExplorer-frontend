import { Header } from "../../../components/header";
import { Container, Content, Card } from "./styles";
import { Footer } from "../../../components/footer";
import { useEffect, useState } from "react";
import { api } from "../../../services/api";
import { Select } from "../../../components/select";
import { Icon_Card } from "../../../components/Icons";

export function AmdOrdersHistory() {
  const [orders, setOrders] = useState([]);
  const [statusPageReload, setStatusPageReload] = useState(true);


  function transformStringData(dataString) {
    const [data, hora] = dataString.split(" ");
    const [ano, mes, dia] = data.split("-");
    const [horaFormatada, minutos] = hora.split(":");
    return `${dia}/${mes} às ${horaFormatada}:${minutos}`;
  }
  async function changeOrderStatus(newStatus, id) {
    console.log(newStatus, id)
    await api.patch("/orders/changeorderstatus", {newStatus, id})
    setStatusPageReload(!statusPageReload)
  }
  const options = [
    { label: 'Pendente', value: 'Pendente' },
    { label: 'Preparando', value: 'Preparando' },
    { label: 'Entregue', value: 'Entregue' },
];

  useEffect(() => {
    async function fetchAllOrders() {
      try {
        const response = await api.get("/orders/allorders");
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
  }, [statusPageReload]);


  return (
    <Container>
      <Header />
      <Content>
        <h2>Histórico de pedidos</h2>
        <table>
          <thead>
            <tr>
              <th>Status</th> <th>Código</th> <th>Detalhamento </th>{" "} <th>Data e hora</th>
            </tr>
          </thead>
          <tbody>
  {orders &&
    orders.map((order, index) => (
      <tr key={index}>
        <td className="orderStatus">
          <Select
            options={options}
            onChange={(e) => changeOrderStatus(e.target.value, order.id)}
            orderStatus={order.status}
          />
        </td>
        <td className="id">{order.id}</td>
        <td className="details">{order.details}</td>
        <td className="date">{order.formattedDate}</td>
      </tr>
    ))}
</tbody>
        </table>
        {orders &&
              orders.map((order, index) => (
                <Card key={index}>
                  <div className="flex">
                    <span>{order.id}</span> 
                    <div className="selectwrapper">

                    <Select
                      options={options}
                      onChange={(e) => changeOrderStatus(e.target.value, order.id)}
                      orderStatus={order.status}
                      />
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
