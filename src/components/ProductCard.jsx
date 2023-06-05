import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useToast,
} from '@chakra-ui/react'
import React, { useContext } from 'react'
import { CartContext } from '../contexts/CartContext'
import { Link } from 'react-router-dom'
import { FaShoppingCart } from 'react-icons/fa'

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext)
  const toast = useToast()

  return (
    <Card maxW="20vw" gap="25px" minW="250px" p="10px" boxShadow="xl">
      <CardBody>
        <Image src={product.image} alt={product.name} borderRadius="md" />
        <Stack mt="6" spacing="3">
          <Heading size="sm" fontWeight="normal">
            {product.name}
          </Heading>
          <Text color="black" fontSize="1xl" fontWeight="bold">
            ${product.price}
          </Text>
        </Stack>
      </CardBody>
      <Divider color="#16302B" />
      <Flex justifyContent="space-around">
        <Button
          as={Link}
          to={`/productos/${product.id}`}
          size="sm"
          variant="ghost"
          colorScheme="purple"
        >
          Ver detalles
        </Button>
        <Button
          variant="ghost"
          size="sm"
          colorScheme="teal"
          onClick={() => {
            addToCart(product)
            toast({
              duration: 2000,
              isClosable: true,
              position: 'bottom-left',
              render: () => (
                <Box color="white" p={3} bg="#86B89D" borderRadius="10px">
                  <Text size="md" fontWeight="bold">
                    {' '}
                    Producto agregado al carrito!
                  </Text>
                  <Text size="md">Abre el carrito para mas informacion</Text>
                </Box>
              ),
            })
          }}
        >
          Añadir al <br /> carrito
        </Button>
      </Flex>
    </Card>
  )
}

export default ProductCard
