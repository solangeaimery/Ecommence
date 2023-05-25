import { Button, Card, CardBody, Heading, Text, CardFooter, Image, Box, Flex, SimpleGrid } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { CartContext } from '../contexts/CartContext'
import { FaTrash } from 'react-icons/fa'

const CartCard = ({ item }) => {

    const { deleteItem } = useContext(CartContext)
    return (
        <Card
            direction={{ base: 'column', sm: 'row' }}
            overflow='hidden'
            variant='outline'
            m="10px"
            maxH="fit-content"
            maxW="90%"
            p="15px">
            <Image
                objectFit='cover'
                maxH="150px"
                src={item.image}
                alt={item.name}
            />
            <Flex flexDirection="column" w="100%">
                <CardBody gap={5}>
                    <Heading size='sm'>{item.name}</Heading>
                    {/* hay que darle mas estilos a esto */}
                    <Text>cantidad : x{item.quantity}</Text>
                    <Text fontWeight="bold">Total  ${item.price}</Text>
                </CardBody>
                <CardFooter justifyContent="flex-end" p="10px">
                    <Button variant='solid' colorScheme='red' w="fit-content" 
                        borderRadius="25px"
                        fontSize="sm"
                        color="#C0E6C8"
                        backgroundColor="#8B728F"
                        p="2px"
                        _hover={{
                            color: "#8B728F",
                            backgroundColor: "#C0E6C8"
                        }} onClick={() => deleteItem(item.id)}>
                        <FaTrash />
                    </Button>
                </CardFooter>
            </Flex>
        </Card>
    )
}

export default CartCard
