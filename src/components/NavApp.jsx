import { HStack, Heading, SimpleGrid, IconButton, Drawer, DrawerOverlay, DrawerCloseButton, DrawerHeader, DrawerBody, DrawerFooter, Button, useDisclosure, DrawerContent } from '@chakra-ui/react'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';


export const NavApp = () => {
	const { isOpen, onOpen, onClose } = useDisclosure()
	const btnRef = React.useRef()
	return (
		<>
			<SimpleGrid columns={2} gap="10px" p="10px" position="fixed"
				top={0}
				left={0}
				right={0}
				height="64px"
				backgroundColor="grey"
				color="white"
				zIndex="999" >
				<Heading>Plant Store</Heading>
				<HStack as="nav" justifyContent="flex-end" gap={5}>
					<Link to="/">
						Inicio
					</Link>
					<Link to="/productos">
						Productos
					</Link>
					<Link to="/iniciar-sesion">
						Iniciar Sesion
					</Link>
					<IconButton to="/crear-cuenta" onClick={onOpen}>
						<FontAwesomeIcon icon={faCartShopping} />
					</IconButton>
				</HStack>
			</SimpleGrid>
			<Drawer
				isOpen={isOpen}
				placement='right'
				onClose={onClose}
				finalFocusRef={btnRef}
			>
				<DrawerOverlay />
				<DrawerContent>
					<DrawerCloseButton />
					<DrawerHeader>Carrito de compras</DrawerHeader>

					<DrawerBody>

					</DrawerBody>

					<DrawerFooter>
						<Button variant='outline' mr={3} onClick={onClose}>
							Cancel
						</Button>
						<Button colorScheme='blue'>Save</Button>
					</DrawerFooter>
				</DrawerContent>
			</Drawer>
		</>
	)

}

