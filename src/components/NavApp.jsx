import { HStack, Heading, SimpleGrid, IconButton, Drawer, DrawerOverlay, DrawerCloseButton, DrawerHeader, DrawerBody, DrawerFooter, Button, useDisclosure, DrawerContent, Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react'
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaUserCircle } from "react-icons/fa"
import React, { useContext } from 'react';
import { UserContext } from '../contexts/UserContext';
import { CartContext } from '../contexts/CartContext';
import CartCard from './CartCard';


export const NavApp = () => {
	const { isOpen, onOpen, onClose } = useDisclosure()
	const { user } = useContext(UserContext)
	const btnRef = React.useRef()
	const {cart, emptyCart} = useContext(CartContext)
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
					{!user ? <Link to="/iniciar-sesion"> Iniciar Sesion </Link> :
						<Menu>
							<MenuButton as={Button}>
								<FaUserCircle />
							</MenuButton>
							<MenuList>
								<MenuItem>Download</MenuItem>
								<MenuItem>Create a Copy</MenuItem>
								<MenuItem>Mark as Draft</MenuItem>
							</MenuList>
						</Menu>
					}
					<IconButton to="/crear-cuenta" onClick={onOpen}>
						<FaShoppingCart />
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
						{cart.map( item => <CartCard item={item} key={item.id}/>)}
					</DrawerBody>

					<DrawerFooter>
						<Button variant='outline' mr={3} onClick={emptyCart}>
							vaciar carrito
						</Button>
						<Button colorScheme='blue'>finalizar compra</Button>
					</DrawerFooter>
				</DrawerContent>
			</Drawer>
		</>
	)

}

