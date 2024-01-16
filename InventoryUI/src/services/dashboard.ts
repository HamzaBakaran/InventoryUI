import appAxios from "./appAxios";

const getDashboardTotalProducts = async (): Promise<any> => {
    return appAxios.get(`/products/count`).then(
        (response) => {
            const data = response.data;
            console.log(data);

            return data;
        });
}
const getDashboardTotalOrders = async (): Promise<any> => {
    return appAxios.get(`/orders/countOrders`).then(
        (response) => {
            const data = response.data;
            console.log(data);

            return data;
        });
}

export default {getDashboardTotalProducts,getDashboardTotalOrders};
