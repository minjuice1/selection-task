import { React } from "react";
import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuthState from "hooks/useAuthState";

const RequireAuth = ({ allowedRoles }) => {
	const auth = useAuthState();
	const location = useLocation();

	return auth?.roles?.find((role) => allowedRoles?.includes(role)) ? (
		<Outlet />
	) : auth?.user ? (
		<Navigate to='/unauthorized' state={{ from: location }} replace />
	) : (
		<Navigate to='/login' state={{ from: location }} replace />
	);
};

export default RequireAuth;
