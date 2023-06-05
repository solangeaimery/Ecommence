import {
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  InputRightElement,
  InputGroup,
  SimpleGrid,
  Text,
  Box,
} from '@chakra-ui/react'
import React, { useContext, useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from '../../firebase/config'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { UserContext } from '../../contexts/UserContext'

export const Login = () => {
  const { handleUser, user } = useContext(UserContext)
  const [show, setShow] = useState(false)
  const handleClick = () => setShow(!show)
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
      navigate('/')
      console.log(user)
    } catch (error) {
      const errorCode = error.code
      console.log(errorCode)
      const errorMessage = error.message
      console.log(errorMessage)
    }
  }

  return (
    <Flex
      backgroundImage="url('public/backgroundLeaves.jpeg')"
      padding="20px"
      minHeight="100vh"
      justifyContent="center"
      alignItems="center"
    >
      <form onSubmit={handleSubmit(loginAccount)}>
        <Flex
          background="white"
          borderRadius="20px"
          boxShadow="2xl"
          minW="50vw"
        >
          <SimpleGrid gap={10} p="50px" textAlign="center" minW="100%">
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
              <InputGroup size="md">
                <Input
                  pr="4.5rem"
                  type={show ? 'text' : 'password'}
                  placeholder="Enter password"
                  {...register('password', {
                    required: 'Este campo es requerido',
                    minLength: {
                      value: 6,
                      message: 'El minimo de caractes es 6',
                    },
                  })}
                />
                <InputRightElement width="4.5rem">
                  <Button h="1.75rem" size="sm" onClick={handleClick}>
                    {show ? 'ocultar' : 'ver'}
                  </Button>
                </InputRightElement>
              </InputGroup>
              <FormErrorMessage>{errors.password?.message}</FormErrorMessage>
            </FormControl>

            <Button
              type="submit"
              margin="20px"
              color="white"
              backgroundColor="#8B728F"
              _hover={{
                color: 'WHITE',
                backgroundColor: '#6A4873',
              }}
              isLoading={isSubmitting}
              isDisabled={!isDirty}
            >
              Iniciar sesion
            </Button>
            <Flex gap="10px" justifyContent="center">
              <Text fontSize="m"> No tienes cuenta?</Text>
              <Link to="/register">Crear cuenta</Link>
            </Flex>
          </SimpleGrid>
        </Flex>
      </form>
    </Flex>
  )
}

