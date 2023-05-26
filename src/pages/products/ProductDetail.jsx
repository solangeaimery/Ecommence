import { Flex } from '@chakra-ui/react'
import React from 'react'
import { useParams } from 'react-router-dom';

export const ProductDetail = (id) => {

    const { productId } = useParams();

    return (
        <Flex marginTop={100}>
            <Heading>hola soy el producto {productId}</Heading>
        </Flex>
    )
}


