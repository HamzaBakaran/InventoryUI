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

/*
const deleteOrder = async (id: string): Promise<OrderType> => {
    try {
      // Get the JWT token from the Redux state
      const authToken = useSelector((state: RootState) => state.auth.userToken);
  
      // Set up headers with the JWT token
      const headers = {
        Authorization: `Bearer ${authToken}`,
      };
  
      // Make the DELETE request with axios
      const response = await appAxios.delete(`/orders/${id}`, { headers });
  
      const data = response.data;
      console.log(data);
  
      return data;
    } catch (error) {
      // Handle errors as needed
      console.error("Error deleting order:", error);
      throw error;
    }
  };
  */
export default {getOrders,addOrder,updateOrder,deleteOrder};



