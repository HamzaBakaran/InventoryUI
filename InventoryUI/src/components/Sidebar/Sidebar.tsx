import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <nav className="navbar navbar-dark bg-dark">
    <div className="container-fluid">
      <Link className="navbar-brand" to="/">
        Inventory App
      </Link>
      <ul className="nav">
        <li className="nav-item">
          <Link className="nav-link text-white" to="/dashboard">
            Dashboard
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to="/user">
            Users
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to="/order">
            Orders
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to="/home">
            Products
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to="/login">
            Login
          </Link>
        </li>
      </ul>
      <div className="d-flex align-items-center">
        <button className="btn btn-danger text-white">Log Out</button>
      </div>
    </div>
  </nav>
);
};

export default Sidebar