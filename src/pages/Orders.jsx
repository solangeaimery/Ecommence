import { Button, Flex, FormControl, FormErrorMessage, FormLabel, Heading, Input, SimpleGrid, useConst } from '@chakra-ui/react'
import React, { useContext, useState } from 'react'
import { useForm } from 'react-hook-form'
import { UserContext, useUserContext } from '../contexts/UserContext'
import { createOrder } from '../services/products'

export const Orders = () => {
    
    const { user } = useContext(UserContext)

    const {
        register,
        handleSubmit,
        formState: { errors, isDirty, isSubmitting },
    } = useForm()

    // const handleOrder = (e) => {
    //     e.preventDefault()
    //     console.log("finalizamos la compra gg")
    // }

    const submitOrder = async (data) => {
        try {
            await 
            console.log(data)
            createOrder({
                consumer: data.email,
                adress: data.address,
                state: data.state, 
                name: data.name ,
                phone: data.phone, 
                cart: [],
                total: 0, 
            })
        } catch (error) {
            // bla bla
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
                        Login
                    </Button>
                </SimpleGrid>
            </Flex>
        </form>
    )
}


