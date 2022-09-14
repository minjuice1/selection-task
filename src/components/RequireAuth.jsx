import { React } from "react";
import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useRecoilState } from "recoil";
import { Auth } from "context/recoil";

const RequireAuth = ({ allowedRoles }) => {
	const auth = useRecoilState(Auth);
	const location = useLocation();

	return auth[0]?.roles?.find((role) => allowedRoles?.includes(role)) ? (
		<Outlet />
	) : auth[0]?.accessToken ? (
		<Navigate to='/unauthorized' state={{ from: location }} replace />
	) : (
		<Navigate to='/login' state={{ from: location }} replace />
	);
};

export default RequireAuth;
