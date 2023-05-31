import { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import { UserContext } from '../contexts/UserContext';

export const ProtectedRoute = () => {
	const {user} = useContext(UserContext)

	if (!user) {
		return <Navigate to="/iniciar-sesion" replace />;
	}

	return <Outlet />;
};