import { Flex, Image, Wrap } from '@chakra-ui/react'
import React, { useContext } from 'react'
// import { ProductsContext } from '../../contexts/productsContext'

export const HomePage = () => {


    // const { products } = useContext(ProductsContext)
    // const latestProducts = getAllProducts()

    return (
        <Flex flexDirection="column">
            <Image
                objectFit='cover'
                src='../public/home.jpeg'
                alt='Dan Abramov' />
            <h1>productos destacados</h1>
            <Wrap>
                {/* {products.map(product => <ProductCard key={product.id} product={product}/>)} */}
            </Wrap>
        </Flex>
    )
}


