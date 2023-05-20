import { Button, Card, CardBody, Heading, Stack, CardFooter, Image } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { CartContext } from '../contexts/CartContext'

const CartCard = ({item}) => {

    const {deleteItem} = useContext(CartContext)
    return (
        <Card
            direction={{ base: 'column', sm: 'row' }}
            overflow='hidden'
            variant='outline'
            m="10px"
            h="fit-content"
        >
            <Image
                objectFit='cover'
                maxW="100px"
                src={item.image}
                alt={item.name}
            />
            <Stack>
                <CardBody>
                    <Heading size='md'>{item.name}</Heading>
                    {/* hay que darle mas estilos a esto */}
                    <p>{item.quantity}</p>
                </CardBody>
                <CardFooter>
                    <Button variant='solid' colorScheme='red' fontSize="sm" onClick={() => deleteItem(item.id)}>
                        eliminar
                    </Button>
                </CardFooter>
            </Stack>
        </Card>
    )
}

export default CartCard
