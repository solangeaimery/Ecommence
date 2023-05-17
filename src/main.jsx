import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter } from 'react-router-dom'
import { ProductsProvider } from './contexts/productsContext.jsx'
import { UserProvider } from './contexts/UserContext.jsx'
import { CartProvider } from './contexts/CartContext.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider>
        <CartProvider>
          <UserProvider>
            <ProductsProvider>
              <App />
            </ProductsProvider>
          </UserProvider>
        </CartProvider>
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>
)
