import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark">
      <a href="/" className="text-white text-decoration-none mb-3 mb-md-0">
        <span className="fs-4">Inventory App</span>
      </a>
      <hr />
      <ul className="nav nav-pills flex-column mb-auto">
      <li className="nav-item">
        <Link className="nav-link text-white" to="/dashboard">Dashboard</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link text-white" to="/user">Users</Link>
        </li>

        <li className="nav-item">
        <Link className="nav-link text-white" to="/order">Orders</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link text-white" to="/home">Products</Link>
        </li>
        <li className="nav-item">
          
          <Link className="nav-link text-white" to="/login">Login</Link>
            
          
        </li>
      </ul>
      <hr />
      <div className="d-flex align-items-center">
  <button className="btn btn-danger text-white" >
    Log Out
  </button>
</div>
    </div>
  

  )
}

export default Sidebar