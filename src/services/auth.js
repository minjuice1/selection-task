import axios from "../api/axios";

const LOGIN_URL = "/auth";
const REGISTER_URL = "/register";

const registerFetch = async (user, pwd) => {
	const res = await axios.post(
		REGISTER_URL,
		JSON.stringify({
			user,
			pwd,
		}),
		{
			headers: { "Content-Type": "application/json" },
			withCredentials: true,
		},
	);
	console.log(JSON.stringify(res?.data));
	return res.data;
};

const loginFetch = async (user, pwd) => {
	const res = await axios.post(
		LOGIN_URL,
		JSON.stringify({
			user,
			pwd,
		}),
		{
			headers: { "Content-Type": "application/json" },
			withCredentials: true,
		},
	);
	// console.log(JSON.stringify(res?.data));
	// console.log(JSON.stringify(res));
	const accessToken = res?.data?.accessToken;
	const roles = res?.data?.roles;
	console.log(accessToken);
	console.log(roles);
	return res.data;
};

export { registerFetch, loginFetch };
