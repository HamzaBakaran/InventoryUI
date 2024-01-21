import { useQuery, useMutation, useQueryClient } from 'react-query';
import { ProductService } from '../services';
import { Product } from '../utils/types';

const useProduct = () => {
  const queryClient = useQueryClient();

return useMutation((data: Product) => ProductService.updateProduct(data), {
    onSuccess: () => {
      queryClient.invalidateQueries('products');
    },
  });
};

export default useProduct;
