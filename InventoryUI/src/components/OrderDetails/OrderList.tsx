import { useState } from 'react';
import Modal from 'react-modal';
import { Order, OrderProduct} from '../../utils/types';
import OrderCard from '../OrderCard/OrderCard';
import useOrders from '../../hooks/useOrders';
import { toast } from 'react-toastify';
import useCreateOrder from '../../hooks/useCreateOrder';
import useProducts from '../../hooks/useProduct';
import * as yup from 'yup';



const orderSchema = yup.object({
  productIds: yup.array().of(
    yup.object({
      product_id: yup.string().required(),
      quantity: yup.number().required().positive().integer(),
    })
  ),
});

const OrderList = () => {
  const { data: orders, isLoading, refetch } = useOrders();
  const createOrder = useCreateOrder();
  const { data: productsData,  isLoading: productsLoading } = useProducts();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState<Order>({
    productIds: [
      {
        product_id: '',
        quantity: 0,
      },
    ],
  });

  const handleInputChange = (index: number, key: keyof OrderProduct, value: string | number) => {
    setFormData((prevData) => {
      const updatedProductIds = [...prevData.productIds];
      updatedProductIds[index] = {
        ...updatedProductIds[index],
        [key]: value,
      };
      return {
        ...prevData,
        productIds: updatedProductIds,
      };
    });
  };

  const handleRemoveProduct = (index: number) => {
    setFormData((prevData) => {
      const updatedProductIds = [...prevData.productIds];
      updatedProductIds.splice(index, 1);
      return {
        ...prevData,
        productIds: updatedProductIds,
      };
    });
  };

  const handleCreateOrder = async () => {
    try {
      await orderSchema.validate(formData, { abortEarly: false });
      await createOrder.mutateAsync(formData);
      toast.success('Order created successfully');
      refetch();
      setIsModalOpen(false);
    } catch (error) {
      const errorMessage = error instanceof yup.ValidationError
        ? error.errors.join('\n')
        : (error as Error).toString();
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
          onClick={() => setIsModalOpen(true)}
        >
          Create Order
        </button>
      </div>

      {isLoading && productsLoading && (
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      )}

      {!isLoading && !productsLoading && (
        <div>
          {orders?.map((order, orderIndex) => (
            <OrderCard key={orderIndex} order={order} />
          ))}
        </div>
      )}

      {!isLoading && !productsLoading && orders?.length === 0 && (
        <div className="row mb-3">
          <p>No orders found.</p>
        </div>
      )}

      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        contentLabel="Create Order Modal"
      >
        <form onSubmit={(e) => { e.preventDefault(); handleCreateOrder(); }}>
          {formData.productIds.map((product, index) => (
            <div key={index}>
              <label>Product ID:</label>
              <select
                value={product.product_id}
                onChange={(e) => handleInputChange(index, 'product_id', e.target.value)}
              >
                <option value="">Select a product</option>
                {productsData?.map((product) => (
                  <option key={product.id} value={product.id}>
                    {product.name}
                  </option>
                ))}
              </select>
              <label>Quantity:</label>
              <input
                type="number"
                value={product.quantity}
                onChange={(e) => handleInputChange(index, 'quantity', parseInt(e.target.value, 10))}
              />
              <button type="button" onClick={() => handleRemoveProduct(index)}>
                Remove Product
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={() =>
              setFormData((prevData) => ({
                productIds: [...prevData.productIds, { product_id: '', quantity: 0 }],
              }))
            }
          >
            Add Product
          </button>
          <button type="submit">Create Order</button>
        </form>
      </Modal>
    </>
  );
};

export default OrderList;
