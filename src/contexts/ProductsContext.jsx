import { createContext, useContext, useEffect, useState } from 'react'

import React from 'react'
import { getAllProducts } from '../services/products'

export const ProductsContext = createContext()

export const ProductsProvider = ({ children }) => {
    const [allProducts, setProducts] = useState([])

    useEffect(() => {
        const getProducts = async () => {
            try {
                const dataArray = await getAllProducts();
                setProducts(dataArray);
                console.log(allProducts)
            } catch (error) {
                console.error('Error al obtener los datos:', error);
            }
        };
        getProducts();
    }, []);

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
