import { Button, ButtonGroup, Card, CardBody, CardFooter, Divider, Heading, Image, Stack, Text } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { CartContext } from '../contexts/CartContext'

const ProductCard = ({ product, size }) => {
    const { addToCart } = useContext(CartContext)

    return (
        <Card maxW='20vw' gap="20px" minW={size} p="10px">
            <CardBody>
                <Image
                    src={product.image}
                    alt={product.name}
                    borderRadius='lg'
                />
                <Stack mt='6' spacing='3'>
                    <Heading size='md'>{product.name}</Heading>
                    <Text color='blue.600' fontSize='2xl'>
                        {product.price}
                    </Text>
                </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
                <ButtonGroup spacing='2'>
                    <Button variant='solid' colorScheme='blue'>
                        Buy now
                    </Button>
                    <Button variant='ghost' colorScheme='blue' onClick={() => addToCart(product)}>
                        Add to cart
                    </Button>
                </ButtonGroup>
            </CardFooter>
        </Card>
    )
}

export default ProductCard
