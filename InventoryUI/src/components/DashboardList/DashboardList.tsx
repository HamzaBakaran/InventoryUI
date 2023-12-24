import { dashboardItems } from "../../constants"
import React, { useState, ChangeEvent } from 'react';
import DashboardCard from '../DashboardCard';

type Props = {};

const DashboardList = (props:Props) => {
const [dashboard, setDashboard] = useState(dashboardItems);

  return (
    <div className="row">
        {dashboard.map((dashboard, i) => (
            <div className="col-md-4 mb-3" key={i}>
            {/* Adjust the col-md-4 to the desired column size */}
            <DashboardCard dashboard={dashboard} />
            </div>
        ))}
    </div>
  )
}

export default DashboardList