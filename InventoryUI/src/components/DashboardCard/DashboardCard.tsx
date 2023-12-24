
import {Dashboard} from '../../utils/types'

type Props = {
  dashboard: Dashboard
}

const DashboardCard = ({dashboard}: Props) => {
  return (
<div className="container mt-4">
  <div className="card">
    <div className="card-body text-center">
      <h5 className="card-title">{dashboard.title}</h5>
      <p className={`card-text fs-1 fw-bold text-${dashboard.color}`}>{dashboard.total}</p>
    </div>
  </div>
</div>
  )
}

export default DashboardCard