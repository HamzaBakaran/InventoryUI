import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Route, Routes } from "react-router-dom"
import Sidebar from './components/Sidebar'
import { Home, Login,NotFound,Order,User,Registration } from './pages'
import Dashboard from "./pages/Dashboard"
import parseJwt from './utils/parseJwt';





function App() {
  console.log(parseJwt(localStorage.getItem('userToken')!));


  return (
    <>
    <Sidebar/>
    <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/user" element={<User />} />
        <Route path="/order" element={<Order />} />
        <Route path="/register" element={<Registration />} />
        <Route path="*" element={<NotFound />} />
    </Routes>
    <ToastContainer />
    </>
  )
}

export default App
