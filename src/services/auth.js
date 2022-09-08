import axios from "../api/axios";

const REGISTER_URL = "/register";
const LOGIN_URL = "/auth";
const LOGOUT_URL = "/logout";

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
	// const accessToken = res?.data?.accessToken;
	// const roles = res?.data?.roles;
	// console.log(accessToken);
	// console.log(roles);
	console.log(res);
	return res.data;
};

const logoutFetch = async () => {
	const res = await axios.get(LOGOUT_URL);
	console.log(res);
};

export { registerFetch, loginFetch, logoutFetch };
