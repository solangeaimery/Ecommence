import { Button, Flex, FormControl, FormErrorMessage, FormLabel, Heading, Input, SimpleGrid, Text } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from '../../firebase/config'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { UserContext } from '../../contexts/UserContext'

const Login = () => {
    const { handleUser, user } = useContext(UserContext)
    const {
        register,
        handleSubmit,
        formState: { errors, isDirty, isSubmitting },
    } = useForm()

    const navigate = useNavigate()

    const loginAccount = async (data) => {
        try {
            const userCredential = await signInWithEmailAndPassword(
                auth,
                data.email,
                data.password
            )
            const userData = userCredential.user
            handleUser(userData)
            navigate(-1)
            console.log(user)
        
        } catch (error) {
            const errorCode = error.code
            console.log(errorCode)
            const errorMessage = error.message
            console.log(errorMessage)
        }
    }


    return (
        <form onSubmit={handleSubmit(loginAccount)}>

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

                    <Button type="submit" isLoading={isSubmitting} isDisabled={!isDirty}>
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
