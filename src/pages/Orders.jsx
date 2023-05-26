import { Button, Flex, FormControl, FormErrorMessage, FormLabel, Heading, Input, SimpleGrid, useConst } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { UserContext } from '../contexts/UserContext'
import { createOrder } from '../services/products'
import { useNavigate } from 'react-router-dom'

export const Orders = () => {

    const { user } = useContext(UserContext)

    const navigate = useNavigate()

    const {
        register,
        handleSubmit,
        formState: { errors, isDirty, isSubmitting },
    } = useForm()


    const submitOrder = async (data) => {
        try {
            await
                createOrder({
                    consumer: data.email,
                    adress: data.address,
                    state: data.state,
                    name: data.name,
                    phone: data.phone,
                    cart: [],
                    total: 0,
                }),
                navigate(-1)
        } catch (error) {
            alert("uop hubo un error")
        }
    }


    return (
        <form onSubmit={handleSubmit(submitOrder)}>
            <Flex justifyContent="center">
                <SimpleGrid gap={15} p="50px" minW="60%" textAlign="center">
                    <Heading>Finalizar compra</Heading>
                    <FormControl isInvalid={errors.email}>
                        <FormLabel>Direccion de Email</FormLabel>
                        <Input
                            {...register('email', {
                                required: 'Este campo es requerido',
                            })}
                            value={user.email}
                            readOnly />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Nombre</FormLabel>
                        <Input {...register('name', {
                            required: 'Please complete this field',
                        })} />
                        <FormErrorMessage>{errors.name?.message}</FormErrorMessage>
                    </FormControl>
                    <FormControl>
                        <FormLabel>Direccion</FormLabel>
                        <Input {...register('address', {
                            required: 'Please complete this field',
                        })} />
                        <FormErrorMessage>{errors.adress?.message}</FormErrorMessage>
                    </FormControl>
                    <FormControl>
                        <FormLabel>provincia</FormLabel>
                        <Input {...register('state', {
                            required: 'Please complete this field',
                        })} />
                        <FormErrorMessage>{errors.state?.message}</FormErrorMessage>
                    </FormControl>
                    <FormControl>
                        <FormLabel>Numero de contacto</FormLabel>
                        <Input {...register("phone", {
                            required: 'Please complete this field',
                        })}
                            type='number' />
                        <FormErrorMessage>{errors.phone?.message}</FormErrorMessage>
                    </FormControl>
                    <Button type="submit" isLoading={isSubmitting} isDisabled={!isDirty}>
                        Finalizar compra
                    </Button>
                </SimpleGrid>
            </Flex>
        </form>
    )
}


