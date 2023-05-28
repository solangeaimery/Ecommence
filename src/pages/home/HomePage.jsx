import { Box, Button, Flex, Heading, Image, SimpleGrid, Wrap } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import ProductCard from '../../components/ProductCard'
import { SkeletonCard } from '../../components/SkeletonCard'
import { getAllProducts } from '../../services/products'
import styles from "../home/HomePage.module.css"
import { Link } from 'react-router-dom'

export const HomePage = () => {

    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const getProducts = async () => {
            try {
                const dataArray = await getAllProducts();
                setData(dataArray);
                setIsLoading(false)
            } catch (error) {
                console.error('Error al obtener los datos:', error);
            }
        };
        getProducts();
    }, []);


    return (
        <Flex flexDirection="column" marginTop="60px">
            <Image
                objectFit='cover'
                src='../public/home.jpeg'
                alt='Dan Abramov' />
            <Heading p="10px" color="#6A4873"
                textAlign="center"
                marginTop="20px"
                size="lg"
                className={styles.heading}
                backgroundImage="url('public/backgroundLeaves.jpeg')"
            > . . . </Heading>
            {isLoading && (
                <SimpleGrid
                    h="100%"
                    w="100%"
                    columns={{ base: '1', md: '3', xl: '4' }}
                    justifyContent="center"
                    backgroundImage="url('public/backgroundLeaves.jpeg')"
                    p="50px"
                >
                    <SkeletonCard size="15%" />
                    <SkeletonCard size="15%" />
                    <SkeletonCard size="15%" />
                    <SkeletonCard size="15%" />
                    <SkeletonCard size="15%" />
                    <SkeletonCard size="15%" />
                    <SkeletonCard size="15%" />
                    <SkeletonCard size="15%" />
                    <SkeletonCard size="15%" />
                </SimpleGrid>
            )}
            <Flex h="100%"
                w="100%"
                paddingBottom="50px"
                gap="20px"
                wrap="wrap"
                justifyContent="center"
                backgroundImage="url('public/backgroundLeaves.jpeg')"
            >
                {data.map(product => product.featuredItem && <ProductCard size="15%" key={product.id} product={product} />)}
                <Button as={Link} to="/productos" margin="20px" color="white"
                w="40vw"
                backgroundColor="#8B728F"
                _hover={{
                    color: "WHITE",
                    backgroundColor: "#6A4873"
                }} >ver todos los productos</Button> 
                {/* aca me gustaria saber pq no me lleva a la parte superior de la pantalla */}
            </Flex>
        </Flex>
    )
}


