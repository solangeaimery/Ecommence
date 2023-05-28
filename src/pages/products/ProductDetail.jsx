import { Button, Card, CardBody, CardFooter, Image, Heading, Stack, Text, Box, Flex, Accordion, AccordionItem, AccordionButton, AccordionIcon, AccordionPanel, Slider, SliderTrack, SliderFilledTrack, SliderThumb, Toast, useToast } from '@chakra-ui/react'
import React, { useContext, useEffect, useMemo } from 'react'
import { useParams } from 'react-router-dom';
import { useProductsContext } from '../../contexts/ProductsContext';
import { useState } from 'react';
import { getOneProduct } from '../../services/products';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaCcVisa, FaPiggyBank, FaRegCreditCard, FaShippingFast } from 'react-icons/fa';
import { CartContext } from '../../contexts/CartContext';

export const ProductDetail = () => {

    const { productId } = useParams();
    const { allProducts } = useProductsContext()
    const [product, setProduct] = useState()
    const [isloading, setIsLoading] = useState(true)
    const {addToCart} = useContext(CartContext)
    const toast = useToast()

    console.log(getOneProduct(productId))
    console.log(allProducts)

    useEffect(() => {
        getOneProduct(productId)
            .then((data) => {
                setProduct(data);
                setIsLoading(false)
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    if (isloading) {
        return (
            <Box marginTop="100px">
                <Heading>toy cargando</Heading>
            </Box>
        )
    }

    return (
        <Flex padding="50px" flexDirection="column">
            <Card
                direction={{ base: 'column', sm: 'row' }}
                variant='outline'
                minH="100%"
                padding="50px"
                overflow="hidden"
            >
                <Flex flexDirection="column" gap="10px">
                    <Image
                        objectFit='cover'
                        maxW={{ base: '100%' }}
                        src={product.image}
                        alt={product.name}
                        minH="35vh"
                        minW="15vw"
                    />
                    <Image
                        objectFit='cover'
                        maxW={{ base: '100%' }}
                        src={product.image}
                        alt={product.name}
                        minH="35vh"
                        minW="15vw"
                    />
                </Flex>
                {/* aqui quiero hacer un carrousel de fotos pero lo vamos a dejar para despues gg  */}
                <Image
                    objectFit='cover'
                    maxW={{ base: '100%' }}
                    src={product.image}
                    alt={product.name}
                    maxH="80vh"
                    p="20px"
                />
                <Stack>
                    <CardBody>
                        <Heading margin="20px" fontWeight="normal" size='lg'>{product.name}</Heading>
                        <Heading py='2' size="lg" fontWeight="bold">${product.price},00</Heading>
                        <Flex flexDirection="row" gap="10px">
                            <Text py='2'>
                                <strong>6 cuotas</strong> sin interes de ${product.price / 6}
                            </Text>
                            <Text py='2' fontSize="20px"><FaCcVisa /></Text>
                            <Text py='2' fontSize="20px"><FaRegCreditCard /></Text>
                        </Flex>
                        <Flex flexDirection="row" gap="10px" >
                            <Text py='2'>
                                <strong>10% de descuento</strong> en efectivo/transferencia bancaria
                            </Text>
                            <Text py='2'><FaPiggyBank fontSize="20px" /></Text>
                        </Flex>
                        <Flex flexDirection="row" gap="10px" marginBottom="15%">
                            <Text py='2'><FaShippingFast fontSize="20px" /></Text>
                            <Text py='2'>
                                Envio a coordinar luego de efectuada la compra. <br /> <strong>Envios a todo el pais</strong>
                            </Text>
                        </Flex>
                        <Button color="white"
                            w="40vw"
                            backgroundColor="#8B728F"
                            _hover={{
                                color: "WHITE",
                                backgroundColor: "#6A4873"
                            }} onClick={() => {
                                addToCart(product)
                                toast({
                                    duration: 2000,
                                    isClosable: true,
                                    position: 'bottom-left',
                                    render: () => (
                                        <Box color='white' p={3} bg='#86B89D' borderRadius="10px">
                                            <Text size="md" fontWeight="bold"> Producto agregado al carrito!</Text>
                                            <Text size="md">Abre el carrito para mas informacion</Text>
                                        </Box>
                                    ),
                                })
                            }}>
                            Agregar al carrito
                        </Button>
                    </CardBody>

                    {/* <CardFooter>
                        <Button variant='solid' colorScheme='blue'>
                            Agregar al carrito
                        </Button>
                    </CardFooter> */}
                </Stack>
            </Card>
            <Box margin="20px">
                <Heading size="md">Info a tener en cuenta :</Heading>
                <Text fontSize="18px" py='2'>
                    {product.info}
                </Text>
            </Box>
        </Flex>
    )
}


