import { Flex, Stack } from '@chakra-ui/react';
import { NavApp } from '../components/NavApp';
import { Footer } from '../components/Footer';
import { Outlet } from 'react-router-dom';

export const HomeLayout = () => {
	return (
		<Flex flexDirection="column" minH="100vh" marginTop={100}>
			<NavApp />
			<Outlet />
			<Footer />
		</Flex>
	);
}