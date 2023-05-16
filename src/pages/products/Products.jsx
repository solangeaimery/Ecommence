import { Flex, Wrap } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import ProductCard from '../../components/ProductCard'
import { getAllProducts } from '../../services/products'

export const Products = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        const getProducts = async () => {
            try {
                const dataArray = await getAllProducts();
                setData(dataArray);
                console.log(dataArray)
            } catch (error) {
                console.error('Error al obtener los datos:', error);
            }
        };
        getProducts();
    }, []);

    return (
        <Flex wrap="wrap" p="50px" gap="20px">
            {data.map(product => <ProductCard key={product.id} size="30%" product={product}/>)}
        </Flex>
    )
}

