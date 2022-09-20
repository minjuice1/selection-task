import axios from "../api/axios";

const USER_URL = "/users";

const getUsersFetch = async (token) => {
	const res = await axios.get(USER_URL, {
		headers: { Authorization: `Bearer ${token}` },
		withCredentials: true,
	});
	return res.data;
};

export default getUsersFetch;
