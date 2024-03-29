import {useMutation, useQueryClient} from 'react-query';
import { OrderService } from '../services';


const useDeleteOrder = () => {
    const queryClient = useQueryClient();
    return useMutation((id: string) => OrderService.deleteOrder(id), {
        onSuccess: () => {
            queryClient.invalidateQueries('orders');
        }
        
    });
}
export default useDeleteOrder;
