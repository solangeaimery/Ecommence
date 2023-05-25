import { createContext, useState } from 'react'

import React from 'react'

export const CartContext = createContext()

// ? setCart((prev) => [...prev, item]) : []

const array = [
    { value: 5 },
    { value: 10 },
    { value: 3 },
];

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])


    const addToCart = (item) => {
        const existOnCart = cart.find(product => product.id === item.id)
        if (existOnCart) {
            const updateCart = cart.map(product => {
                if (product.id === item.id) {
                    return {
                        ...product,
                        quantity: product.quantity + 1,
                        price: product.price + product.price
                    };
                }
                return product;
            });
            setCart(updateCart)
        } else {
            const updateCart = [...cart, {
                ...item, quantity: 1,
            }];
            setCart(updateCart);
        }
    }


    const deleteItem = (id) => {
        setCart(cart.filter(item => item.id !== id))
    }

    const emptyCart = () => {
        setCart([])
    }

    const totalCart = () => {
        const total = cart.reduce((accumulator, currentValue) => {
            return accumulator + currentValue["price"];
        }, 0);

        return total;
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, deleteItem, emptyCart, totalCart }}>
            {children}
        </CartContext.Provider>
    )

}

export const useCartContext = () => useContext(CartContext)