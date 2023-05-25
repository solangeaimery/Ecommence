import { Flex, Heading, Image, SimpleGrid, Wrap } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import ProductCard from '../../components/ProductCard'
import { SkeletonCard } from '../../components/SkeletonCard'
import { getAllProducts } from '../../services/products' 
import styles from "../home/HomePage.module.css"

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
        <Flex flexDirection="column">
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
                >Productos destacados : </Heading>
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
            <SimpleGrid h="100%"
                w="100%"
                p="50px"
                gap="10px"
                columns={{ base: '1', md: '3', xl: '4' }}
                justifyContent="center"
                backgroundImage="url('public/backgroundLeaves.jpeg')"
            >
                {data.map(product => product.featuredItem && <ProductCard size="15%" key={product.id} product={product} />)}
            </SimpleGrid>
        </Flex>
    )
}


