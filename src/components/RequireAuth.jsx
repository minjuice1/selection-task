import { React } from "react";
import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useRecoilState } from "recoil";
import { getAuth } from "context/RecoilProvider";

const RequireAuth = ({ allowedRoles }) => {
	const auth = useRecoilState(getAuth);
	const location = useLocation();

	return auth[0]?.roles?.find((role) => allowedRoles?.includes(role)) ? (
		<Outlet />
	) : auth[0]?.user ? (
		<Navigate to='/unauthorized' state={{ from: location }} replace />
	) : (
		<Navigate to='/login' state={{ from: location }} replace />
	);
};

export default RequireAuth;
