import { Flex, Stack } from '@chakra-ui/react';
import { NavApp } from '../components/NavApp';
import { Footer } from '../components/Footer';

export const AppLayout = ({ children }) => {
	return (
		<Flex flexDirection="column" minH="100vh" marginTop={100}>
			<NavApp />
			<Stack flex="1">{children}</Stack>
			<Footer />
		</Flex>
	);
}