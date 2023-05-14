import { createContext, useContext, useState } from 'react'

import React from 'react'

export const ProductsContext = createContext()

export const ProductsProvider = ({ children }) => {

    // const firebaseProducts = getAllProducts()

    const [allProducts, setProducts] = useState([])

    const handleProducts = (products) => {
        setProducts(products)
    }

    return (
        <ProductsContext.Provider value={{ allProducts, handleProducts }}>
            {children}
        </ProductsContext.Provider>
    )
}

export const useProductsContext = () => useContext(ProductsContext)
