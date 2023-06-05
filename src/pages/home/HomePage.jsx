import {
    Button,
    Flex,
    SimpleGrid,
    Image
} from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import ProductCard from '../../components/ProductCard'
import { SkeletonCard } from '../../components/SkeletonCard'
import { getAllProducts } from '../../services/products'
import { Link } from 'react-router-dom'
import { FaSun } from 'react-icons/fa'

export const HomePage = () => {
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const getProducts = async () => {
            try {
                const dataArray = await getAllProducts()
                setData(dataArray)
                setIsLoading(false)
            } catch (error) {
                console.error('Error al obtener los datos:', error)
            }
        }
        getProducts()
    }, [])

    return (
        <Flex flexDirection="column" marginTop={{ base: '0px', sm: '50px' }}>
            <Image objectFit="cover" src="https://firebasestorage.googleapis.com/v0/b/ecommence-df92c.appspot.com/o/home.jpeg?alt=media&token=687dae36-66fd-4f1b-b3ff-d20c06ce211c&_gl=1*36imiu*_ga*MTUxOTg4MDU4Ny4xNjgzOTMyMjQ0*_ga_CW55HF8NVT*MTY4NjAwMjQ2MC4xNS4xLjE2ODYwMDI1NzMuMC4wLjA." alt="plants" />
            <Flex
                backgroundImage="url('https://firebasestorage.googleapis.com/v0/b/ecommence-df92c.appspot.com/o/backgorundleaves.jpeg?alt=media&token=0b93704d-1cfd-4d7c-a200-8e713acf28ec&_gl=1*14ldtno*_ga*MTUxOTg4MDU4Ny4xNjgzOTMyMjQ0*_ga_CW55HF8NVT*MTY4NjAwMjQ2MC4xNS4xLjE2ODYwMDI2NjIuMC4wLjA.')"
                p="20px"
                color="#6A4873"
                justifyContent="center"
            >
                <FaSun fontSize="25px" />
            </Flex>
            {isLoading && (
                <SimpleGrid
                    h="100%"
                    w="100%"
                    columns={{ base: '1', md: '3', xl: '4' }}
                    justifyContent="center"
                    backgroundImage="url('public/backgorundleaves.jpeg')"
                    p="50px"
                >
                    <SkeletonCard />
                    <SkeletonCard />
                    <SkeletonCard />
                    <SkeletonCard />
                    <SkeletonCard />
                    <SkeletonCard />
                    <SkeletonCard />
                    <SkeletonCard />
                    <SkeletonCard />
                    <SkeletonCard />
                    <SkeletonCard />
                </SimpleGrid>
            )}
            <Flex
                h="100%"
                w="100%"
                paddingBottom="50px"
                gap="20px"
                wrap="wrap"
                justifyContent="center"
                backgroundImage="url('public/backgorundleaves.jpeg')"
            >
                {data.map(
                    (product) =>
                        product.featuredItem && (
                            <ProductCard key={product.id} product={product} />
                        )
                )}
                <Button
                    as={Link}
                    to="/productos"
                    margin="20px"
                    color="white"
                    w="40vw"
                    backgroundColor="#8B728F"
                    _hover={{
                        color: 'WHITE',
                        backgroundColor: '#6A4873',
                    }}
                >
                    Ver todo
                </Button>
                {/* aca me gustaria saber pq no me lleva a la parte superior de la pantalla */}
            </Flex>
        </Flex>
    )
}
