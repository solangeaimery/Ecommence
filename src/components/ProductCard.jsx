import { Button, ButtonGroup, Card, CardBody, CardFooter, Divider, Flex, Heading, Image, Stack, Text } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { CartContext } from '../contexts/CartContext'
import { Link } from 'react-router-dom'
import { FaShoppingCart } from 'react-icons/fa'

const ProductCard = ({ product, size }) => {
    const { addToCart } = useContext(CartContext)

    return (
        <Card maxW='20vw' gap="25px" minW={size} p="10px" boxShadow='lg'>
            <CardBody>
                <Image
                    src={product.image}
                    alt={product.name}
                    borderRadius="md"
                />
                <Stack mt='6' spacing='3'>
                    <Heading size='sm' fontWeight="normal">{product.name}</Heading>
                    <Text color='black' fontSize='1xl' fontWeight="bold">
                        ${product.price}
                    </Text>
                </Stack>
            </CardBody>
            <Divider color="#16302B" />
            <Flex justifyContent="space-around">
                    <Button as={Link} to={`/products/${product.id}`} size="sm" variant='ghost' colorScheme="purple" >
                        Ver detalles
                    </Button>
                    <Button variant='ghost' size="sm" colorScheme="teal" onClick={() => addToCart(product)}>
                    Añadir al <br/> carrito
                    </Button>
            </Flex>
        </Card>
    )
}

export default ProductCard
