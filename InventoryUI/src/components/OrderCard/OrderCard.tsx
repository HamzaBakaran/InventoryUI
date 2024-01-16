import { OrderType, Product } from '../../utils/types';
import useDeleteOrder from '../../hooks/useDeleteOrder';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

type props = {
  order: OrderType;
};

const OrderCard = ({ order }: props) => {
const deleteOrder = useDeleteOrder();

const handleDelete = async (orderId: string | undefined) => {
  // Ensure productId is not undefined
  if (!orderId) {
    toast.error('Invalid productId:');
    return;
  }

  try {
    await deleteOrder.mutateAsync(orderId);
    toast.success('Order deleted successfully');
  } catch (error) {
    const errorMessage = (error as Error).toString(); // Type assertion
    toast.error(`Error deleting order: ${errorMessage}`);
  }
};

 
    return (
        <div className="container mt-3">
          <div className="card">
            <div className="card-header">
              Order ID: {order.id}
            </div>
            <div className="card-body">
              <h5 className="card-title">Order Date: {order.orderDate}</h5>
              <h5 className="card-title">Products:</h5>
              <ul className="list-group">
                {order.products.map((product, productIndex) => (
                  <li key={productIndex} className="list-group-item">
                    <p>
                      <strong>Product Name:</strong> {product.productName}
                    </p>
                    <p>
                      <strong>Quantity:</strong> {product.quantity}
                    </p>
                    <p>
                      <strong>Price:</strong> ${product.price}
                    </p>
                    <p>
                      <strong>Subtotal:</strong> ${product.subtotal}
                    </p>
                  </li>
                ))}
              </ul>
              <h5 className="card-title mt-3">Total: ${order.total}</h5>
              <div className="d-flex justify-content-between mt-3">
                <button
                  type="button"
                  className="btn btn-success"
                  // Add your edit function here
                >
                  Edit
                </button>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => handleDelete(order.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    };
    
export default OrderCard;
