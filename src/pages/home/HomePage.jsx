import { Flex, Heading, Image, Wrap } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { ProductsContext } from '../../contexts/productsContext'
import ProductCard from '../../components/ProductCard'

export const HomePage = () => {


    const { allProducts } = useContext(ProductsContext)
    // const latestProducts = getAllProducts()

    return (
        <Flex flexDirection="column">
            <Image
                objectFit='cover'
                src='../public/home.jpeg'
                alt='Dan Abramov' />
            <Heading>productos destacados</Heading>
            <Wrap p="50px">
                {allProducts.map(product => product.featuredItem && <ProductCard size="15%" key={product.id} product={product}/>)}
            </Wrap>
        </Flex>
    )
}


