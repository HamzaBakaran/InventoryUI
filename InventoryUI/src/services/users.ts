import appAxios from "./appAxios";
import { UserType } from "../utils/types";

const getUsers = async (): Promise<UserType[]> => {
    return appAxios.get(`/products/`).then(
        (response) => {
            const data = response.data;
            console.log(data);
 
 
            return data;
        });
 
}
const addUser = async (user: UserType): Promise<UserType> => {
    return appAxios.post(`/products/register`, user).then(
        (response) => {
            const data = response.data;
            console.log(data);
 
 
            return data;
        });
 
}
const updateUser = async (user: UserType): Promise<UserType> => {
    return appAxios.put(`/products/${user.id}`, user).then(
        (response) => {
            const data = response.data;
            console.log(data);
 
 
            return data;
        });

}
const deleteUser = async (id: string): Promise<UserType> => {
    return appAxios.delete(`/products/${id}`).then(
        (response) => {
            const data = response.data;
            console.log(data);
 
 
            return data;
        });
 
}

export default {getUsers,addUser,updateUser,deleteUser};