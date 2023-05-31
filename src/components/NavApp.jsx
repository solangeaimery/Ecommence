import { HStack, Input, Heading, SimpleGrid, IconButton, Drawer, DrawerOverlay, DrawerCloseButton, DrawerHeader, DrawerBody, DrawerFooter, Button, useDisclosure, DrawerContent, Menu, MenuButton, MenuList, MenuItem, Image, Box, Link, Flex, Text, Badge } from '@chakra-ui/react'
import { NavLink } from 'react-router-dom';
import { FaShoppingCart, FaUserCircle } from "react-icons/fa"
import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../contexts/UserContext';
import { CartContext } from '../contexts/CartContext';
import CartCard from './CartCard';
import "../App.css"

export const NavApp = () => {

	const [logoSize, setLogoSize] = useState("100px");
	const { isOpen, onOpen, onClose } = useDisclosure()
	const { user, handleLogOut } = useContext(UserContext)
	const btnRef = React.useRef()
	const { cart, emptyCart, totalCart } = useContext(CartContext)


	useEffect(() => {
		const handleScroll = () => {
			const shouldLogoGrow = window.scrollY <= 20;
			const newLogoSize = shouldLogoGrow ? "150px" : "100px";
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
			<Flex gap="10px"
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
				boxShadow='xl'
				className='navbar'
				paddingRight="15px"
			>
				<SimpleGrid columns={3}>
					<Flex>
						<Image src='public/izquerdas.png' alt='flores' boxSize="200px" marginTop="-40px" marginLeft="-5px" marginBottom="-50px"></Image>
					</Flex>
					<Flex justifyContent="center" alignItems="center">
						<Image
							src='public/LogoFake.png'
							alt='logo'
							boxSize="full"
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
								_hover={{ color: "#C0E6C8" }}
							> Iniciar Sesion </Link>
							<Text>|</Text>
							<Link as={NavLink} to="/register"
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
						<Box position="relative">
							<IconButton
								onClick={onOpen}
								color="#C0E6C8"
								background="transparent"
								borderRadius="30px"
								_hover={{
									color: "#6A4873",
									background: "#C0E6C8"
								}}
							>
								<FaShoppingCart fontSize="25px" />
							</IconButton>
							{cart.length > 0 && (
								<Badge
									position="absolute"
									top={-2}
									right={-2}
									fontSize="xs"
									color="white"
									bg="#16302B"
									borderRadius="full"
									px={2}
									py={1}
								>
									{cart.length}
								</Badge>
							)}
						</Box>
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

						<Flex flexDir="column" justifyContent="flex-end" gap={5}>
							{totalCart() !== 0 && <Heading textAlign="end" as='h4' size='md' marginBottom="-40px" marginRight="20px">Total  ${totalCart()}</Heading>}
							<Flex justifyContent="space-between" alignItems="flex-end">
								<Box>
									<Image src='public/maceta.png' alt='maceta' boxSize="100px"></Image>
								</Box>
								<Box margin="20px">
									<Button variant='outline' color="#6A4873" borderColor="#8B728F" borderWidth="1px" mr={3} onClick={emptyCart}>
										vaciar carrito
									</Button>
									<Button as={NavLink} to={!user ? "/iniciar-sesion" : "/finalizar-compra"}
										color="white"
										backgroundColor="#8B728F"
										_hover={{
											color: "WHITE",
											backgroundColor: "#6A4873"
										}}
										isDisabled={cart.length === 0}
									>Finalizar compra
									</Button>
								</Box>
							</Flex>
						</Flex>
				</DrawerContent>
			</Drawer>
		</>
	)

}

