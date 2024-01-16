
import OrderDetails from '../components/OrderDetails';
import { orderItems } from '../constants';

const OrdersPage = () => {
  return <OrderDetails orders={orderItems} />;
};

export default OrdersPage;