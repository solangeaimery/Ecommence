import { createContext, useContext, useState } from 'react'

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')) || [])

  const addToCart = (item) => {
    const existOnCart = cart.find((product) => product.id === item.id)
    if (existOnCart) {
      const updateCart = cart.map((product) => {
        if (product.id === item.id) {
          return {
            ...product,
            quantity: product.quantity + 1,
            price: product.price + product.price,
          }
        }
        return product
      })
      setCart(updateCart)
      localStorage.setItem('cart', JSON.stringify(updateCart));
    } else {
      const updateCart = [
        ...cart,
        {
          ...item,
          quantity: 1,
        },
      ]
      setCart(updateCart)
      localStorage.setItem('cart', JSON.stringify(updateCart));
    }
  }

  const deleteItem = (id) => {
    const updateCart = cart.filter((item) => item.id !== id)
    setCart(updateCart)
    localStorage.setItem('cart', JSON.stringify(updateCart))
  }

  const emptyCart = () => {
    const updateCart = []
    setCart(updateCart)
    localStorage.setItem('cart', JSON.stringify(updateCart))

  }

  const totalCart = () => {
    const total = cart.reduce((accumulator, currentValue) => {
      return accumulator + currentValue['price']
    }, 0)

    return total
  }

  return (
    <CartContext.Provider
      value={{ cart, addToCart, deleteItem, emptyCart, totalCart }}
    >
      {children}
    </CartContext.Provider>
  )
}

export const useCartContext = () => useContext(CartContext)
