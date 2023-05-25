import { HStack, Input, Heading, SimpleGrid, IconButton, Drawer, DrawerOverlay, DrawerCloseButton, DrawerHeader, DrawerBody, DrawerFooter, Button, useDisclosure, DrawerContent, Menu, MenuButton, MenuList, MenuItem, Image, Box, Link, Flex, Text } from '@chakra-ui/react'
import { NavLink } from 'react-router-dom';
import { FaShoppingCart, FaUserCircle } from "react-icons/fa"
import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../contexts/UserContext';
import { CartContext } from '../contexts/CartContext';
import CartCard from './CartCard';



export const NavApp = () => {

	const [logoSize, setLogoSize] = useState("80px");
	const { isOpen, onOpen, onClose } = useDisclosure()
	const { user, handleLogOut } = useContext(UserContext)
	const btnRef = React.useRef()
	const { cart, emptyCart, totalCart } = useContext(CartContext)

	useEffect(() => {
		const handleScroll = () => {
			const shouldLogoGrow = window.scrollY < window.innerHeight;
			const newLogoSize = shouldLogoGrow ? "80px" : "40px";
			if (logoSize !== newLogoSize) {
				setLogoSize(newLogoSize);
			}
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, [logoSize])


	return (
		<>
			<Flex gap="10px" p="10px"
				flexDirection="column"
				position="fixed"
				top={0}
				left={0}
				right={0}
				height="fit-content"
				backgroundColor="grey"
				color="white"
				zIndex="999"
				background="#6A4873"
				transition="all 0.3s ease"
			>
				<SimpleGrid columns={3}>
					<Flex>
						<Heading>HI</Heading>
					</Flex>
					<Flex justifyContent="center">
						<Image
							src='https://d3ugyf2ht6aenh.cloudfront.net/stores/001/476/017/themes/common/logo-412807228-1610050861-cb6f70cf316041f4e70021764a3246a51610050862-480-0.png?0'
							alt='logo'
							boxSize='80px'
							objectFit='cover'
							width={logoSize}
							height={logoSize}
							transition="all 0.3s ease" />
					</Flex>
					<HStack gap={5} justifyContent="flex-end">
						{!user ? <Flex gap={5}>
							<Link as={NavLink} to="/iniciar-sesion" fontSize="16px"
								color="white"
								fontWeight="bold"
								_hover={{ color: "#C0E6C8" }}> Iniciar Sesion </Link>
							<Link as={NavLink} to="/crear-cuenta"
								fontSize="16px"
								color="white"
								fontWeight="bold"
								_hover={{ color: "#C0E6C8" }}> Crear cuenta </Link>
						</Flex> :
							<Menu>
								<MenuButton p="5px" paddingLeft="7px" as={IconButton} color="#C0E6C8" background="transparent" borderRadius="25px" _hover={{
									color: "#6A4873",
									background: "#C0E6C8"
								}}>
									<FaUserCircle fontSize="25px" />
								</MenuButton>
								<MenuList>
									<MenuItem as="button" onClick={handleLogOut} color="black">cerrar sesion</MenuItem>
								</MenuList>
							</Menu>
						}
						<IconButton onClick={onOpen} color="#C0E6C8" background="transparent" borderRadius="30px" _hover={{
							color: "#6A4873",
							background: "#C0E6C8"
						}}>
							<FaShoppingCart fontSize="25px" />
						</IconButton>
					</HStack>
				</SimpleGrid>
				<HStack justifyContent="center">
					<HStack boxShadow='md' gap={10} width="fit-content" borderTop="1px" borderBottom="1px" p="5px" fontWeight="bold">
						<Link as={NavLink} to="/" fontSize="16px"
							color="white"
							fontWeight="bold"
							_hover={{ color: "#C0E6C8" }}>
							Inicio
						</Link>
						<Link as={NavLink} to="/productos"
							fontWeight="bold"
							_hover={{ color: "#C0E6C8" }} >
							Productos
						</Link>
					</HStack>
				</HStack>
			</Flex>
			<Drawer
				isOpen={isOpen}
				placement='right'
				onClose={onClose}
				finalFocusRef={btnRef}
				size="md"
			>
				<DrawerOverlay />
				<DrawerContent>
					<DrawerCloseButton />
					<DrawerHeader backgroundColor="#C0E6C8" color="#6A4873">Carrito de compras</DrawerHeader>

					<DrawerBody>
						{cart.map(item => <CartCard item={item} key={item.id} />)}
					</DrawerBody>

					<DrawerFooter>
						<Flex flexDir="column" justifyContent="flex-end" gap={5}>
						{totalCart() !== 0 && <Heading textAlign="end" as='h4' size='md'>Total  ${totalCart()}</Heading>}
							<Box>
								<Button variant='outline' color="#6A4873" borderColor="#8B728F" borderWidth="1px" mr={3} onClick={emptyCart}>
									vaciar carrito
								</Button>
								<Button as={NavLink} to={!user ? "/iniciar-sesion" : "/finalizar-compra"}
									color="white"
									backgroundColor="#8B728F"
									_hover={{
										color: "WHITE",
										backgroundColor: "#6A4873"
									}} >Finalizar compra
								</Button>
							</Box>
						</Flex>
					</DrawerFooter>
				</DrawerContent>
			</Drawer>
		</>
	)

}

