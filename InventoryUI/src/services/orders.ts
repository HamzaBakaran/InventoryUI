import appAxios from "./appAxios";
import { Order, OrderType } from "../utils/types";

const getOrders = async (): Promise<OrderType[]> => {
    return appAxios.get(`/orders/getAllCustom`).then(
        (response) => {
            const data = response.data;
            console.log(data);

            return data;
        });
}

const addOrder = async (order: Order): Promise<OrderType> => {
    return appAxios.post(`/orders/register`, order).then(
        (response) => {
            const data = response.data;
            console.log(data);

            return data;
        });

}
const updateOrder = async (order: Order): Promise<OrderType> => {
    return appAxios.put(`/orders/${order.id}`, order).then(
        (response) => {
            const data = response.data;
            console.log(data);

            return data;
        });

}
const deleteOrder = async (id: string): Promise<OrderType> => {
    return appAxios.delete(`/orders/${id}`).then(
        (response) => {
            const data = response.data;
            console.log(data);

            return data;
        });

}
export default {getOrders,addOrder,updateOrder,deleteOrder};


