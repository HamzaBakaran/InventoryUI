import {useQuery } from 'react-query';
import { DashboardService } from '../services';

const useDashboardOrderCount = () => {
            return useQuery('dashboardOrderCount',
            () => DashboardService.getDashboardTotalOrders(),
            {refetchOnWindowFocus: false}
            );
        }
export default useDashboardOrderCount;

