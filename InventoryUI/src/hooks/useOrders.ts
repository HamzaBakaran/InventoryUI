import {useQuery } from 'react-query';
import { OrderService } from '../services';

const useOrder = () => {
    return useQuery('orders',
    () => OrderService.getOrders(),
    {refetchOnWindowFocus: false}
    );
}
export default useOrder;