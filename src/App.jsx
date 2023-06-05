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
        <Image src="public/maceta.png" alt="monstera" boxSize="200px" />
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
        <Route element={<ProtectedRoute />}>
          <Route path="/finalizar-compra" element={<Orders />}></Route>
        </Route>
      </Route>
    </Routes>
  )
}

export default App
