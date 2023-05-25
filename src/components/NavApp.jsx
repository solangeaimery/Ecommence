import { HStack, Input, Heading, SimpleGrid, IconButton, Drawer, DrawerOverlay, DrawerCloseButton, DrawerHeader, DrawerBody, DrawerFooter, Button, useDisclosure, DrawerContent, Menu, MenuButton, MenuList, MenuItem, Image, Box, Link, Flex, background } from '@chakra-ui/react'
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
	const { cart, emptyCart } = useContext(CartContext)

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
	}, [logoSize]);


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
			>
				<DrawerOverlay />
				<DrawerContent>
					<DrawerCloseButton />
					<DrawerHeader>Carrito de compras</DrawerHeader>

					<DrawerBody>
						{cart.map(item => <CartCard item={item} key={item.id} />)}
					</DrawerBody>

					<DrawerFooter>
						<Button variant='outline' mr={3} onClick={emptyCart}>
							vaciar carrito
						</Button>
						<Button as={Link} to={!user ? "/iniciar-sesion" : "/finalizar-compra"} >finalizar compra</Button>
					</DrawerFooter>
				</DrawerContent>
			</Drawer>
		</>
	)

}

