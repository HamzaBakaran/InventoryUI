import {useQuery } from 'react-query';
 import { DashboardService } from '../services';

 const useDashboardProductCount = () => {
        return useQuery('dashboardProductCount',
        () => DashboardService.getDashboardTotalProducts(),
        {refetchOnWindowFocus: false}
        );
    }
    export default useDashboardProductCount;