import { React, useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import useRefreshToken from "hooks/useRefreshToken";
import useAuthState from "hooks/useAuthState";
import usePersistState from "hooks/usePersistState";

const PersistLogin = () => {
	const [isLoading, setIsLoading] = useState(true);
	const refresh = useRefreshToken();
	const auth = useAuthState();
	const persist = usePersistState();

	useEffect(() => {
		const verifyRefreshToken = async () => {
			try {
				await refresh();
			} catch (err) {
				console.error(err);
			} finally {
				setIsLoading(false);
			}
		};

		!auth?.accessToken && persist ? verifyRefreshToken() : setIsLoading(false);
	}, []);

	useEffect(() => {
		// console.log(`isLoading: ${isLoading}`);
		// console.log(`aT: ${JSON.stringify(auth?.accessToken)}`);
	}, [isLoading]);

	return (
		<>
			{!persist ? ( //
				<Outlet /> //
			) : isLoading ? (
				<p>Loading...</p> //
			) : (
				<Outlet />
			)}
		</>
	);
};

export default PersistLogin;
