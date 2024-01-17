
import OrderDetails from '../components/OrderDetails';
import { orderItems } from '../constants';
import { OrderType } from '../utils/types';

const OrdersPage = () => {
  return <OrderDetails orders={orderItems} />;
};

export default OrdersPage;