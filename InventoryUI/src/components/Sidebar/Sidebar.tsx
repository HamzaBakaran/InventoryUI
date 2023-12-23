import React from 'react'

const Sidebar = () => {
  return (
    <div className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark">
      <a href="/" className="text-white text-decoration-none mb-3 mb-md-0">
        <span className="fs-4">Inventory App</span>
      </a>
      <hr />
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item">
          <a href="#" className="nav-link active" aria-current="page">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link text-white">
            Dashboard
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link text-white">
            Orders
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link text-white">
            Products
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link text-white">
            Customers
          </a>
        </li>
      </ul>
      <hr />
      <div className="dropdown">
        <a
          href="#"
          className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
          id="dropdownUser1"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <span className="me-2">User Avatar</span>
          <strong>mdo</strong>
        </a>
        <ul className="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
          <li>
            <a className="dropdown-item" href="#">
              New project...
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Settings
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Profile
            </a>
          </li>
          <li>
            <hr className="dropdown-divider" />
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Sign out
            </a>
          </li>
        </ul>
      </div>
    </div>
  

  )
}

export default Sidebar