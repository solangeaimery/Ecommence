import { HStack, Heading, Link, SimpleGrid } from '@chakra-ui/react'
import React from 'react'


export const NavApp = () => {
    return (
        <SimpleGrid columns={2} gap="10px" p="10px" >
			<Heading>Plant Store</Heading>

			<HStack as="nav" justifyContent="flex-end" gap={5}>
				<Link to="/">
					Home
				</Link>
				<Link to="/productos">
					Productos
				</Link>
				<Link  to="/iniciar-sesion">
					Iniciar Sesion
				</Link>
				<Link  to="/crear-cuenta">
					Crear Cuenta
				</Link>
			</HStack>
		</SimpleGrid>
    )

}

