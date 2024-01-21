
import DashboardCard from '../DashboardCard';
import useDashboardProductCount from '../../hooks/useDashboardProductCount';
import useDashboardOrderCount from '../../hooks/useDashboardOrdersCount';

const DashboardList = () => {
  const { data: productCount } = useDashboardProductCount();
  const { data: orderCount } = useDashboardOrderCount();


  return (
<div className="row">
  <div className="col-md-4 mb-3 mx-auto">
    <div className="mx-3">
      {productCount && 'totalProducts' in productCount && (
        <DashboardCard title="Total Products" color="success" total={productCount.totalProducts} />
      )}
    </div>
  </div>
  <div className="col-md-4 mb-3 mx-auto">
    <div className="mx-3">
      {orderCount && 'totalOrders' in orderCount && ( 
        <DashboardCard title="Total Orders" color="danger" total={orderCount.totalOrders} />
      )}
    </div>
  </div>
</div>
  );
};

export default DashboardList;
