import './App.css'
import { AppLayout } from './Layouts/AppLayout'
import { Route, Routes } from 'react-router-dom'
import { HomePage } from "./pages/home/HomePage"
import { Products } from './pages/products/Products'
import Login from './pages/auth/Login'
import { Register } from './pages/auth/register'
import { Orders } from './pages/Orders'
import { useContext } from 'react'
import { UserContext } from './contexts/UserContext'


function App() {

const {isLoading} = useContext(UserContext)

if (isLoading) {
  return ( <p> toy cargando </p> ) 
}
  return ( 
    <AppLayout>
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/productos' element={<Products/>} />
      <Route path='/iniciar-sesion' element={<Login/>} />
      <Route path='/register' element={<Register/>}></Route>
      <Route path='/finalizar-compra' element={<Orders/>}></Route>
    </Routes>
  </AppLayout>
  )
}

export default App
