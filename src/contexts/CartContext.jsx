import { createContext, useState } from 'react'

import React from 'react'

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    const addToCart = (item) => {
        !cart.includes(item) && setCart((prev) => [...prev, item])
    }

    const deleteItem = (id) => {
        setCart(cart.filter(item => item.id !== id))
    }

    const emptyCart = () => {
        setCart([])
    }

    return (
        <CartContext.Provider value={{ cart, addToCart, deleteItem, emptyCart }}>
            {children}
        </CartContext.Provider>
    )
}

export const useCartContext = () => useContext(CartContext)