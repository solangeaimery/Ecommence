import { Button, Flex, FormControl, FormErrorMessage, FormLabel, Heading, Input, SimpleGrid, Text } from '@chakra-ui/react'
import React from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from '../../firebase/config'
import { createUserWithEmailAndPassword } from 'firebase/auth'

export const Register = () => {
    const {
        register,
        handleSubmit,
        formState: { errors, isDirty, isSubmitting },
    } = useForm()

    const navigate = useNavigate()

    const createNewAccount = async (data) => {
        try {
            const userCredential = await createUserWithEmailAndPassword(
                auth,
                data.email,
                data.password
            )
            const user = userCredential.user//aqui iria el seter del context
            navigate("/")
        } catch (error) {
            const errorCode = error.code
            console.log(errorCode)
            const errorMessage = error.message
            console.log(errorMessage)
        }
    }


    return (
        <form onSubmit={handleSubmit(createNewAccount)}>

            <Flex justifyContent="center">
                <SimpleGrid gap={15} p="50px" minW="60%" textAlign="center">
                    <Heading>Registrarse</Heading>
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

                    <Button type="submit" isLoading={isSubmitting} isDisabled={!isDirty}>
                        Login
                    </Button>
                    <Flex gap="10px" justifyContent="center"><Text fontSize='m'> Ya tienes cuenta?</Text>
                        <Link to="/iniciar-sesion">Iniciar sesion</Link></Flex>
                </SimpleGrid>
            </Flex>
        </form>
    )
}


