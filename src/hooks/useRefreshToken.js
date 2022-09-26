import axios from "../api/axios";
import { useRecoilState } from "recoil";
import { useAuth } from "context/RecoilProvider";

const useRefreshToken = () => {
	const [auth, setAuth] = useRecoilState(useAuth);
	console.log(auth);

	const refresh = async () => {
		const res = await axios.get("/refresh", {
			withCredentials: true,
		});
		setAuth((prev) => {
			console.log(JSON.stringify(prev));
			console.log(res.data.accessToken);
			return {
				...prev,
				roles: res.data.roles,
				accessToken: res.data.accessToken,
			};
		});
		return res.data.accessToken;
	};

	return refresh;
};

export default useRefreshToken;
