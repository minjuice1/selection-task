import axios from "axios";

const BASE_URL =
	"https://5co7shqbsf.execute-api.ap-northeast-2.amazonaws.com/production/";

const signupFetch = async (email, password) => {
	const res = await axios({
		method: "post",
		url: BASE_URL + "auth/signup",
		data: {
			email: email,
			password: password,
		},
	});
	return res.data;
};

const loginFetch = async (email, password) => {
	const res = await axios({
		method: "post",
		url: BASE_URL + "auth/signin",
		data: {
			email: email,
			password: password,
		},
	});
	return res.data;
};

export { signupFetch, loginFetch };
