import {useQuery } from 'react-query';
import { ProductService } from '../services';

const useProduct = () => {
    return useQuery('products',
    () => ProductService.getProducts(),
    {refetchOnWindowFocus: false}
    );
}
export default useProduct;