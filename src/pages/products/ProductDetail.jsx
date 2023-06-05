import {
    Button,
    Card,
    CardBody,
    Image,
    Heading,
    Stack,
    Text,
    Box,
    Flex,
    Toast,
} from '@chakra-ui/react'
import { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useState } from 'react'
import { getOneProduct } from '../../services/products'
import {
    FaCcVisa,
    FaPiggyBank,
    FaRegCreditCard,
    FaShippingFast,
} from 'react-icons/fa'
import { CartContext } from '../../contexts/CartContext'
import { useMediaQuery } from 'react-responsive'
import { StageSpinner } from 'react-spinners-kit'

export const ProductDetail = () => {
    const { productId } = useParams()
    const [product, setProduct] = useState()
    const [isloading, setIsLoading] = useState(true)
    const { addToCart } = useContext(CartContext)
    const isMobile = useMediaQuery({ maxWidth: 767 })

    console.log(getOneProduct(productId))

    useEffect(() => {
        getOneProduct(productId)
            .then((data) => {
                setProduct(data)
                setIsLoading(false)
            })
            .catch((error) => {
                console.error(error)
            })
    }, [])

    if (isloading) {
        return (
            <Flex
                flexDir="column"
                minW="100vw"
                minH="100vh"
                justifyContent="center"
                alignItems="center"
            >
                <Image src="public/maceta.png" alt="monstera" boxSize="200px" />
                <StageSpinner size={80} color="#6A4873" loading={true} />
            </Flex>
        )
    }

    return (
        <Flex padding={{ base: '10px', sm: '50px' }} flexDirection="column">
            <Card
                direction={{ base: 'column', sm: 'row' }}
                variant="outline"
                minH="100%"
                minW="80vw"
                padding={{ base: '20px', sm: '50px' }}
                overflow="hidden"
            >
                {!isMobile && (
                    <Flex flexDirection="column" gap="10px">
                        <Image
                            objectFit="cover"
                            maxW={{ base: '100%' }}
                            src={product.image[1]}
                            alt={product.name}
                            minH="25vh"
                            minW="10vw"
                        />
                        <Image
                            objectFit="cover"
                            maxW={{ base: '100%' }}
                            src={product.image[2]}
                            alt={product.name}
                            minH="35vh"
                            minW="15vw"
                        />
                    </Flex>
                )}
                <Image
                    objectFit="cover"
                    maxW={{ base: '100%' }}
                    src={product.image[0]}
                    alt={product.name}
                    maxH="90vh"
                    p="10px"
                />
                <Stack>
                    <CardBody>
                        <Heading margin="20px" fontWeight="normal" size="lg">
                            {product.name}
                        </Heading>
                        <Heading py="2" size="lg" fontWeight="bold">
                            ${product.price},00
                        </Heading>
                        <Flex flexDirection="row" gap="10px">
                            <Text py="2">
                                <strong>6 cuotas</strong> sin interes de ${product.price / 6}
                            </Text>
                            <Text py="2" fontSize="20px">
                                <FaCcVisa />
                            </Text>
                            <Text py="2" fontSize="20px">
                                <FaRegCreditCard />
                            </Text>
                        </Flex>
                        <Flex flexDirection="row" gap="10px">
                            <Text py="2">
                                <strong>10% de descuento</strong> en efectivo/transferencia
                                bancaria
                            </Text>
                            <Text py="2">
                                <FaPiggyBank fontSize="20px" />
                            </Text>
                        </Flex>
                        <Flex flexDirection="row" gap="10px" marginBottom="15%">
                            <Text py="2">
                                <FaShippingFast fontSize="20px" />
                            </Text>
                            <Text py="2">
                                Envio a coordinar luego de efectuada la compra. <br />{' '}
                                <strong>Envios a todo el pais</strong>
                            </Text>
                        </Flex>
                        <Button
                            color="white"
                            w="40vw"
                            backgroundColor="#8B728F"
                            _hover={{
                                color: 'WHITE',
                                backgroundColor: '#6A4873',
                            }}
                            onClick={() => {
                                addToCart(product)
                                Toast({
                                    duration: 2000,
                                    isClosable: true,
                                    position: 'bottom-left',
                                    render: () => (
                                        <Box color="white" p={3} bg="#86B89D" borderRadius="10px">
                                            <Text size="md" fontWeight="bold">
                                                {' '}
                                                Producto agregado al carrito!
                                            </Text>
                                            <Text size="md">
                                                Abre el carrito para mas informacion
                                            </Text>
                                        </Box>
                                    ),
                                })
                            }}
                        >
                            Agregar al carrito
                        </Button>
                    </CardBody>
                </Stack>
            </Card>
            <Box margin="20px">
                <Heading size="md">Info a tener en cuenta :</Heading>
                <Text fontSize="18px" py="2">
                    {product.info}
                </Text>
            </Box>
        </Flex>
    )
}
