import { Route, Routes } from "react-router-dom"
import Sidebar from './components/Sidebar'
import { Home, Login } from './pages'


function App() {


  return (
    <>
    <Sidebar/>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
    </Routes>
    </>
  )
}

export default App
