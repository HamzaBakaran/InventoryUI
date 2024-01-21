import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Route, Routes } from "react-router-dom"
import Navbar from './components/Navbar/Navbar';
import { Home, Login,NotFound,Order,User,Registration } from './pages'
import Dashboard from "./pages/Dashboard"
import parseJwt from './utils/parseJwt';
import ProtectedRoute from './utils/ProtectedRoute';
import ProtectedRouteAdmin from './utils/ProtectedRouteAdmin';





function App() {
  console.log(parseJwt(localStorage.getItem('userToken')!));


  return (
    <>
    <Navbar/>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} /> {/* Home page/product page */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Registration />} />
        <Route element={<ProtectedRoute />}>
        <Route path="/user" element={<User />} />
        <Route path="/order" element={<Order />} />
        </Route>
        <Route element={<ProtectedRouteAdmin />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
        
        <Route path="*" element={<NotFound />} />
    </Routes>
    <ToastContainer />
    </>
  )
}

export default App
