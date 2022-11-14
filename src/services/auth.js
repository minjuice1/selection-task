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
	return res.data;
};

const logoutFetch = async (token) => {
	try {
		await axios.get(LOGOUT_URL, {
			headers: { Authorization: `Bearer ${token}` },
			withCredentials: true,
		});
	} catch (err) {
		console.error(err);
	}

	return logoutFetch;
};

export { registerFetch, loginFetch, logoutFetch };
