import { Button, Flex, FormControl, FormErrorMessage, FormLabel, Heading, Input, SimpleGrid, Text } from '@chakra-ui/react'
import React from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'

const Login = () => {
    const {
        register,
        handleSubmit,
        formState: { errors, isDirty },
    } = useForm()

    // const { errors } = formState

    // console.log(errors)
    console.log(isDirty)

    const login = (data) => {
        console.log(data)
        alert(JSON.stringify(data))
    }
    return (
        <form onSubmit={handleSubmit(login)}>
            
            <Flex justifyContent="center">
                <SimpleGrid gap={15} p="50px" minW="60%" textAlign="center">
                    <Heading>Iniciar sesion</Heading>
                    <FormControl isInvalid={errors.email}>
                        <FormLabel>Direccion de Email</FormLabel>
                        <Input
                            type="email"
                            {...register('email', {
                                required: 'Este campo es requerido',
                                pattern: {
                                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                    message: 'Este email no es valido',
                                },
                            })}
                        />
                        <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
                    </FormControl>

                    <FormControl isInvalid={errors.password}>
                        <FormLabel>Contraseña</FormLabel>
                        <Input
                            type="password"
                            {...register('password', {
                                required: 'Este campo es requerido',
                                minLength: {
                                    value: 6,
                                    message: 'El minimo de caractes es 6',
                                },
                            })}
                        />
                        <FormErrorMessage>{errors.password?.message}</FormErrorMessage>
                    </FormControl>

                    <Button type="submit" isDisabled={!isDirty}>
                        Login
                    </Button>
                    <Flex gap="10px" justifyContent="center"><Text fontSize='m'> No tienes cuenta?</Text>
                    <Link to="/register">Crear cuenta</Link></Flex>
                </SimpleGrid>
            </Flex>
        </form>
    )
}

export default Login
