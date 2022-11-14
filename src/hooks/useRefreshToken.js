import axios from "../api/axios";
import { useRecoilState } from "recoil";
import { useAuth } from "context/RecoilProvider";

const useRefreshToken = () => {
	const [auth, setAuth] = useRecoilState(useAuth);

	const refresh = async () => {
		const res = await axios.get("/refresh", {
			withCredentials: true,
		});
		setAuth((prev) => {
			return {
				...prev,
				roles: res.data.roles,
				accessToken: res.data.accessToken,
			};
		});
		return auth.accessToken;
	};

	return refresh;
};

export default useRefreshToken;
