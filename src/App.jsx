import { useState } from 'react'
import './App.css'
import { AppLayout } from './Layouts/AppLayout'
import { Route, Routes } from 'react-router-dom'
import { HomePage } from "./pages/home/HomePage"
import { Products } from './pages/products/Products'
import Login from './pages/auth/Login'
import { Register } from './pages/auth/register'


function App() {
  const [count, setCount] = useState(0)

  return (
    <AppLayout>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/productos' element={<Products/>} />
        <Route path='/iniciar-sesion' element={<Login/>} />
        <Route path='/register' element={<Register/>}></Route>
      </Routes>
    </AppLayout>
  )
}

export default App
