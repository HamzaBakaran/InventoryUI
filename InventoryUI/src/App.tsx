import { Route, Routes } from "react-router-dom"
import Sidebar from './components/Sidebar'
import { Home, Login,NotFound,User } from './pages'
import Dashboard from "./pages/Dashboard"
//import Order from "./pages/Order"


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
        <Route path="*" element={<NotFound />} />
    </Routes>
    </>
  )
}

export default App
