import {
	HStack,
	Heading,
	IconButton,
	Drawer,
	DrawerOverlay,
	DrawerCloseButton,
	DrawerHeader,
	DrawerBody,
	Button,
	useDisclosure,
	DrawerContent,
	Menu,
	MenuButton,
	MenuList,
	MenuItem,
	Image,
	Box,
	Flex,
	Badge,
} from '@chakra-ui/react'
import { Link, NavLink } from 'react-router-dom'
import { FaShoppingCart, FaUserCircle } from 'react-icons/fa'
import { MdMenu } from 'react-icons/md'
import React, { useContext } from 'react'
import { UserContext } from '../contexts/UserContext'
import { CartContext } from '../contexts/CartContext'
import CartCard from './CartCard'
import '../App.css'
import { ChevronDownIcon } from '@chakra-ui/icons'

export const NavMobile = () => {
	const { isOpen, onOpen, onClose } = useDisclosure()
	const { user, handleLogOut } = useContext(UserContext)
	const btnRef = React.useRef()
	const { cart, emptyCart, totalCart } = useContext(CartContext)

	return (
		<>
			<Flex
				gap="10px"
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
				boxShadow="xl"
				className="navbar"
				paddingRight="15px"
			>
				<Flex justifyContent="space-around" alignItems="center">
					<Menu>
						<MenuButton
							maxW="60px"
							gap="10px"
							color="#C0E6C8"
							background="transparent"
							borderRadius="30px"
							_hover={{
								color: '#6A4873',
								background: '#C0E6C8',
							}}
							as={Button}
							rightIcon={<ChevronDownIcon fontSize="25px" />}
						>
							<MdMenu fontSize="25px" />
						</MenuButton>
						<MenuList>
							<MenuItem as={Link} to="/" color="black">
								Inicio
							</MenuItem>
							<MenuItem as={Link} to="/productos" color="black">
								Productos
							</MenuItem>
							{!user ? (
								<>
									<MenuItem as={Link} to="/iniciar-sesion" color="black">
										Iniciar sesion
									</MenuItem>
									<MenuItem as={Link} to="/register" color="black">
										Crear cuenta
									</MenuItem>
								</>
							) : (
								<>
									<MenuItem
										gap="10px"
										as="button"
										onClick={handleLogOut}
										color="black"
									>
										{' '}
										<FaUserCircle fontSize="18px" /> Cerrar sesion
									</MenuItem>
								</>
							)}
						</MenuList>
					</Menu>
					<Flex justifyContent="center" alignItems="center">
						<Image
							src="public/LogoFake.png"
							alt="logo"
							boxSize="full"
							objectFit="cover"
							width="100px"
							height="100px"
							transition="all 0.3s ease"
						/>
					</Flex>
					<HStack gap={5} justifyContent="flex-end">
						<Box position="relative">
							<IconButton
								onClick={onOpen}
								color="#C0E6C8"
								background="transparent"
								borderRadius="30px"
								_hover={{
									color: '#6A4873',
									background: '#C0E6C8',
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
				</Flex>
			</Flex>
			<Drawer
				isOpen={isOpen}
				placement="right"
				onClose={onClose}
				finalFocusRef={btnRef}
				size="md"
			>
				<DrawerOverlay />
				<DrawerContent>
					<DrawerCloseButton />
					<DrawerHeader backgroundColor="#C0E6C8" color="#6A4873">
						Carrito de compras
					</DrawerHeader>

					<DrawerBody>
						{cart.map((item) => (
							<CartCard item={item} key={item.id} />
						))}
					</DrawerBody>

					<Flex
						flexDir="column"
						justifyContent="flex-end"
						gap={5}
						padding="5px"
					>
						{totalCart() !== 0 && (
							<Heading
								textAlign="end"
								as="h4"
								size="sm"
								marginBottom="-40px"
								marginRight="20px"
							>
								Total ${totalCart()}
							</Heading>
						)}
						<Flex justifyContent="space-between" alignItems="flex-end">
							<Box>
								<Image
									src="public/maceta.png"
									alt="maceta"
									boxSize="100px"
								></Image>
							</Box>
							<Flex
								gap="5px"
								padding="5px"
								flexDirection="column"
								marginTop="20px"
							>
								<Button
									variant="outline"
									color="#6A4873"
									borderColor="#8B728F"
									borderWidth="1px"
									mr={3}
									onClick={emptyCart}
								>
									vaciar carrito
								</Button>
								<Button
									as={NavLink}
									to={!user ? '/iniciar-sesion' : '/finalizar-compra'}
									color="white"
									backgroundColor="#8B728F"
									_hover={{
										color: 'WHITE',
										backgroundColor: '#6A4873',
									}}
									isDisabled={cart.length === 0}
								>
									Finalizar compra
								</Button>
							</Flex>
						</Flex>
					</Flex>
				</DrawerContent>
			</Drawer>
		</>
	)
}
