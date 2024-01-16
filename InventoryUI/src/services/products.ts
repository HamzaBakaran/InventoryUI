import appAxios from "./appAxios";
import { Product } from "../utils/types";

const getProducts = async (): Promise<Product[]> => {
    return appAxios.get(`/products/`).then(
        (response) => {
            const data = response.data;
            console.log(data);
 
 
            return data;
        });
 
}
const addProduct = async (product: Product): Promise<Product> => {
    return appAxios.post(`/products/register`, product).then(
        (response) => {
            const data = response.data;
            console.log(data);
 
 
            return data;
        });
 
}
const updateProduct = async (product: Product): Promise<Product> => {
    return appAxios.put(`/products/${product.id}`, product).then(
        (response) => {
            const data = response.data;
            console.log(data);
 
 
            return data;
        });

}
const deleteProduct = async (id: string): Promise<Product> => {
    return appAxios.delete(`/products/${id}`).then(
        (response) => {
            const data = response.data;
            console.log(data);
 
 
            return data;
        });
 
}
export default {getProducts,addProduct,updateProduct,deleteProduct};