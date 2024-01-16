import { Route, Routes } from "react-router-dom"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Sidebar from './components/Sidebar'
import { Home, Login,NotFound,Order,User } from './pages'
import Dashboard from "./pages/Dashboard"




function App() {


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
        <Route path="*" element={<NotFound />} />
    </Routes>
    <ToastContainer />
    </>
  )
}

export default App
