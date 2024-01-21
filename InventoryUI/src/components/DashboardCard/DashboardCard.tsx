

type Props = {
  title: string;
  color: string;
  total: number;
}

const DashboardCard = ({title,color,total}: Props) => {
  return (
    <div className="mt-4"> 
      <div className="card p-3"> 
        <div className="card-body text-center">
          <h5 className="card-title">{title}</h5>
          <p className={`card-text fs-1 fw-bold text-${color}`}>{total}</p>
        </div>
      </div>
    </div>
  );
};

export default DashboardCard