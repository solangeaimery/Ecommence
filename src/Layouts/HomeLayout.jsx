import { Flex, Stack } from '@chakra-ui/react';
import { NavApp } from '../components/NavApp';
import { Footer } from '../components/Footer';
import { Outlet } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { NavMobile } from '../components/NavMobile';

export const HomeLayout = () => {
	const isMobile = useMediaQuery({ maxWidth: 767 });

	return (
		<Flex flexDirection="column" minH="100vh" marginTop={100}>
			{isMobile ? <NavMobile/> : <NavApp />}
			<Outlet />
			<Footer />
		</Flex>
	);
}