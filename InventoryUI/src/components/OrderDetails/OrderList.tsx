import { Order, OrderType } from '../../utils/types';
import OrderCard from '../OrderCard/OrderCard';
import useOrder from '../../hooks/useOrders';
import { toast } from 'react-toastify';
import useCreateOrder from '../../hooks/useCreateOrder';

type Props = {};

const OrderList = ( props : Props) => {
  const { data: orders, error, isLoading, isError, refetch } = useOrder();
  const createOrder = useCreateOrder();

  if (error){
    
    const errorMessage = (error as Error).toString(); // Type assertion
      toast.error(`Error fetching orders: ${errorMessage}`);
  }

  const handleCreateOrder = async () => {
    try {
      // You can modify this with your own logic to get new product data
      const newProductData: Order = {
        productIds: [ 
          {
            "product_id": "65a67c37e8896a4ddd870e4b",
            "quantity": 2
          },
          {
            "product_id": "65a4f48bd359de708ebcde85",
            "quantity": 1
          }
        ]

        
      };

      await createOrder.mutateAsync(newProductData);
      toast.success('Order created successfully');
    } catch (error) {
      const errorMessage = (error as Error).toString(); // Type assertion
      toast.error(`Error creating order: ${errorMessage}`);
    }
  };

  return (
    <>
    <div className="container">
      <div className="row mb-3">
          <div className="col-12 col-md-4 mb-3 mx-auto"></div>
          <h2>Order Details</h2>
      </div>
      <button
      type="button"
      className="btn btn-primary"
      onClick={handleCreateOrder}
    >Create Order</button>
    </div>
 
    {isLoading &&
      <div className="spinner-border text-primary" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    }
    {!isLoading &&
    <div>
      
      {orders?.map((order, orderIndex) => (
        <OrderCard key={orderIndex} order={order} />
      ))}
    </div>
}
{!isLoading && orders?.length === 0 && (
          <div className="row mb-3">
            <p>No orders found.</p>
          </div>
        )}
    </> 
  );
};
       

export default OrderList;
