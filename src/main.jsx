import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter } from 'react-router-dom'
import { UserProvider } from './contexts/UserContext.jsx'
import { CartProvider } from './contexts/CartContext.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider>
        <CartProvider>
          <UserProvider>
              <App />
          </UserProvider>
        </CartProvider>
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>
)
