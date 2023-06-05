import {
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  SimpleGrid,
  useDisclosure,
  Image,
  ModalFooter,
} from '@chakra-ui/react'
import { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { UserContext } from '../contexts/UserContext'
import { createOrder } from '../services/products'
import { useNavigate } from 'react-router-dom'
import { CartContext } from '../contexts/CartContext'

export const Orders = () => {
  const { user } = useContext(UserContext)
  const navigate = useNavigate()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isSubmitting },
  } = useForm()
  const { emptyCart } = useContext(CartContext)

  const submitOrder = async (data) => {
    try {
      await createOrder({
        consumer: data.email,
        adress: data.address,
        state: data.state,
        name: data.name,
        phone: data.phone,
        cart: [],
        total: 0,
      }),
        onOpen()
      emptyCart()
      setTimeout(() => {
        navigate(-1)
      }, 5000)
    } catch (error) {
      alert('uop hubo un error')
    }
  }

  return (
    <Flex
      backgroundImage="url('https://firebasestorage.googleapis.com/v0/b/ecommence-df92c.appspot.com/o/backgorundleaves.jpeg?alt=media&token=0b93704d-1cfd-4d7c-a200-8e713acf28ec&_gl=1*14ldtno*_ga*MTUxOTg4MDU4Ny4xNjgzOTMyMjQ0*_ga_CW55HF8NVT*MTY4NjAwMjQ2MC4xNS4xLjE2ODYwMDI2NjIuMC4wLjA.')"
      padding="20px"
      minHeight="100vh"
      justifyContent="center"
      alignItems="center"
    >
      <form onSubmit={handleSubmit(submitOrder)}>
        <Flex
          justifyContent="center"
          background="white"
          borderRadius="20px"
          boxShadow="2xl"
          minW="50vw"
        >
          <SimpleGrid gap={10} p="50px" textAlign="center" minW="100%">
            <Heading margin="10PX">Finalizar compra</Heading>
            <FormControl isInvalid={errors.email}>
              <FormLabel>Direccion de Email</FormLabel>
              <Input
                {...register('email', {
                  required: 'Este campo es requerido',
                })}
                value={user.email}
                readOnly
              />
            </FormControl>
            <FormControl>
              <FormLabel>Nombre</FormLabel>
              <Input
                {...register('name', {
                  required: 'Please complete this field',
                })}
              />
              <FormErrorMessage>{errors.name?.message}</FormErrorMessage>
            </FormControl>
            <FormControl>
              <FormLabel>Direccion</FormLabel>
              <Input
                {...register('address', {
                  required: 'Please complete this field',
                })}
              />
              <FormErrorMessage>{errors.adress?.message}</FormErrorMessage>
            </FormControl>
            <FormControl>
              <FormLabel>provincia</FormLabel>
              <Input
                {...register('state', {
                  required: 'Please complete this field',
                })}
              />
              <FormErrorMessage>{errors.state?.message}</FormErrorMessage>
            </FormControl>
            <FormControl>
              <FormLabel>Numero de contacto</FormLabel>
              <Input
                {...register('phone', {
                  required: 'Please complete this field',
                })}
                type="number"
              />
              <FormErrorMessage>{errors.phone?.message}</FormErrorMessage>
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
              Finalizar compra
            </Button>
          </SimpleGrid>
        </Flex>
      </form>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent padding="10px">
          <ModalHeader minw="100%">Compra finalizada con exito!</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            Apreciamos sinceramente su compra y nos complace informarle que un
            asesor se pondrá en contacto con usted en breve para gestionar el
            pago y coordinar el envío de manera eficiente.
          </ModalBody>
          <ModalFooter display="flex" justifyContent="flex-end">
            <Image
              src="https://firebasestorage.googleapis.com/v0/b/ecommence-df92c.appspot.com/o/monsteraizquierdas.png?alt=media&token=d5067512-c224-48e3-96d0-c7a6c2003b02&_gl=1*hn6r3p*_ga*MTUxOTg4MDU4Ny4xNjgzOTMyMjQ0*_ga_CW55HF8NVT*MTY4NjAwMjQ2MC4xNS4xLjE2ODYwMDI2MjUuMC4wLjA."
              alt="Dan Abramov"
              boxSize="100px"
              marginRight="-50px"
              marginBottom="-50px"
            />
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Flex>
  )
}
