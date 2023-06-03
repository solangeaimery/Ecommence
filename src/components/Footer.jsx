import { Box, Flex, Text } from '@chakra-ui/react';
import { FaLock, FaRegCreditCard } from 'react-icons/fa';
import { useMediaQuery } from 'react-responsive';
import "../App.css"

export const Footer = () => {
	const isMobile = useMediaQuery({ maxWidth: 767 });
	return (
		<Flex flexDir="column">
			{isMobile ? <Flex backgroundColor="#D8E4DC" justifyContent="space-around" padding="20px">
				<Flex gap="10px" alignItems="flex-start">
					<FaRegCreditCard fontSize="30px" />
					<Text> <strong> 3 CUOTAS SIN INTERES </strong> </Text>
				</Flex>
			</Flex> :
				<Flex backgroundColor="#D8E4DC" justifyContent="space-around" padding="20px">
					<Flex gap="10px" alignItems="flex-start">
						<FaRegCreditCard fontSize="30px" />
						<Text> <strong> 3 CUOTAS SIN INTERES </strong> </Text>
					</Flex>
					<Flex gap="10px" alignItems="flex-start">
						<Box><FaRegCreditCard fontSize="30px" /></Box>
						<Flex flexDir="column">
							<Text> <strong>PAGA COMO QUIERAS </strong></Text>
							<Text fontSize="13px">Tarjetas de credio y debito</Text>
						</Flex>
					</Flex>
					<Flex gap="10px" alignItems="flex-start">
						<FaLock fontSize="30px" />
						<Flex flexDir="column">
							<Text> <strong>COMPRA CON SEGURIDAD </strong></Text>
							<Text fontSize="13px">tus datos siempre protegidos</Text>
						</Flex>
					</Flex>
				</Flex>}
			<Flex
				h={100}
				w="100%"
				bg="#16302B"
				alignItems="center"
				justifyContent="center"
				color="white"
				flexDir="column"
				gap="10px"
			>
				<Flex alignItems="center" gap="5px"><Text>Hecho con 🤍 by</Text><Text className='firma' fontSize="25px">Solange Aimery</Text></Flex>
				<Text fontSize="12px" color="#CAD4CD">Copyright © Todo plants - 2023. Todos los derechsos reservados</Text>
			</Flex>
		</Flex>
	);
}