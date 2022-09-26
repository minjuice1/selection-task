import { React, useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import useRefreshToken from "hooks/useRefreshToken";
import { useRecoilState } from "recoil";
import { getAuth } from "context/RecoilProvider";

const PersistLogin = () => {
	const [isLoading, setIsLoading] = useState(true);
	const refresh = useRefreshToken();
	const auth = useRecoilState(getAuth);
	console.log(`auth : ${auth[0].accessToken}`);
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

		!auth[0]?.accessToken ? verifyRefreshToken() : setIsLoading(false);
	}, []);

	useEffect(() => {
		console.log(`isLoading: ${isLoading}`);
		console.log(`aT: ${JSON.stringify(auth[0]?.accessToken)}`);
	}, [isLoading]);

	return <>{isLoading ? <p>Loading...</p> : <Outlet />}</>;
};

export default PersistLogin;
