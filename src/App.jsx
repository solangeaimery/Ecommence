import './App.css'
import { HomeLayout } from './Layouts/HomeLayout'
import { Route, Routes } from 'react-router-dom'
import { HomePage } from './pages/home/HomePage'
import { Products } from './pages/products/Products'
import { Login } from './pages/auth/Login'
import { Register } from "./pages/auth/Register"
import { Orders } from './pages/Orders'
import { useContext } from 'react'
import { UserContext } from './contexts/UserContext'
import { ProductDetail } from './pages/products/ProductDetail'
import { ProtectedRoute } from './components/ProtectedRoute'
import { FormsLayout } from './Layouts/FormsLayout'
import { Image, Flex } from '@chakra-ui/react'
import { StageSpinner } from 'react-spinners-kit'
import { NotFound } from './components/NotFound'

function App() {
  const { isLoading } = useContext(UserContext)

  if (isLoading) {
    return (
      <Flex
        flexDir="column"
        minW="100vw"
        minH="100vh"
        justifyContent="center"
        alignItems="center"
      >
        <Image src="https://firebasestorage.googleapis.com/v0/b/ecommence-df92c.appspot.com/o/maceta.png?alt=media&token=4bcc69c4-80ee-491d-b78f-2af5b3fc7702&_gl=1*1opeu0h*_ga*MTUxOTg4MDU4Ny4xNjgzOTMyMjQ0*_ga_CW55HF8NVT*MTY4NjAwMjQ2MC4xNS4xLjE2ODYwMDQyMjUuMC4wLjA." alt="maceta" boxSize="200px" />
        <StageSpinner size={80} color="#6A4873" loading={true} />
      </Flex>
    )
  }
  return (
    <Routes>
      <Route element={<HomeLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/productos" element={<Products />} />
        <Route path="/productos/:productId" element={<ProductDetail />} />
      </Route>
      <Route element={<FormsLayout />}>
        <Route path="/iniciar-sesion" element={<Login />} />
        <Route path="/register" element={<Register />}></Route>
        <Route path='*' element={<NotFound/>}></Route>
        <Route element={<ProtectedRoute />}>
          <Route path="/finalizar-compra" element={<Orders />}></Route>
        </Route>
      </Route>
    </Routes>
  )
}

export default App
