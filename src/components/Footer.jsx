import { Box, Flex, IconButton, Text } from '@chakra-ui/react'
import { FaFacebook, FaInstagram, FaLock, FaRegCreditCard } from 'react-icons/fa'
import { useMediaQuery } from 'react-responsive'
import '../App.css'
import { Link } from 'react-router-dom'

export const Footer = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 })
  return (
    <Flex flexDir="column" minH="fit-content">
      {isMobile ? (
        <Flex
          backgroundColor="#D8E4DC"
          justifyContent="space-around"
          padding="20px"
        >
          <Flex gap="10px" alignItems="flex-start">
            <FaRegCreditCard fontSize="30px" />
            <Text>
              {' '}
              <strong> 3 CUOTAS SIN INTERES </strong>{' '}
            </Text>
          </Flex>
        </Flex>
      ) : (
        <Flex
          backgroundColor="#D8E4DC"
          justifyContent="space-around"
          padding="20px"
        >
          <Flex gap="10px" alignItems="flex-start">
            <FaRegCreditCard fontSize="30px" />
            <Text>
              {' '}
              <strong> 3 CUOTAS SIN INTERES </strong>{' '}
            </Text>
          </Flex>
          <Flex gap="10px" alignItems="flex-start">
            <Box>
              <FaRegCreditCard fontSize="30px" />
            </Box>
            <Flex flexDir="column">
              <Text>
                {' '}
                <strong>PAGA COMO QUIERAS </strong>
              </Text>
              <Text fontSize="13px">Tarjetas de credio y debito</Text>
            </Flex>
          </Flex>
          <Flex gap="10px" alignItems="flex-start">
            <FaLock fontSize="30px" />
            <Flex flexDir="column">
              <Text>
                {' '}
                <strong>COMPRA CON SEGURIDAD </strong>
              </Text>
              <Text fontSize="13px">tus datos siempre protegidos</Text>
            </Flex>
          </Flex>
        </Flex>
      )}
      <Flex
        h="fit-content"
        w="100%"
        bg="#16302B"
        alignItems="center"
        justifyContent="center"
        color="white"
        flexDir="column"
        gap="10px"
      >
        <Flex paddingTop="10px">
        <IconButton
                as={Link} to="https://www.facebook.com/"
                color="#C0E6C8"
                background="transparent"
                borderRadius="30px"
                _hover={{
                  color: '#6A4873',
                  background: '#C0E6C8',
                }}
              >
                <FaFacebook fontSize="20px" />
              </IconButton>
              <IconButton
                as={Link} to="https://www.instagram.com/"
                color="#C0E6C8"
                background="transparent"
                borderRadius="30px"
                _hover={{
                  color: '#6A4873',
                  background: '#C0E6C8',
                }}
              >
                <FaInstagram fontSize="20px" />
              </IconButton>
        </Flex>
        <Flex alignItems="center" gap="5px">
          <Text>Hecho con 🤍 by</Text>
          <Text className="firma" fontSize="25px">
            Solange Aimery
          </Text>
        </Flex>
        <Text fontSize="12px" color="#CAD4CD">
          Copyright © Todo plants - 2023. Todos los derechsos reservados
        </Text>
      </Flex>
    </Flex>
  )
}
