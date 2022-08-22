import axios from "axios";

const BASE_URL =
	"https://5co7shqbsf.execute-api.ap-northeast-2.amazonaws.com/production/";

export const signupFetch = async (email, password) => {
	const res = await axios({
		method: "post",
		url: BASE_URL + "auth/signup",
		data: {
			email: email,
			password: password,
		},
	});
	console.log("회원가입", res);
	return res.data;
};

export const signinFetch = async (email, password) => {
	const res = await axios({
		method: "post",
		url: BASE_URL + "auth/signin",
		data: {
			email: email,
			password: password,
		},
	});
	console.log("로그인", res);
	return res.data;
};

// .then(function (response) {
// 	console.log(response);
// })
// .catch(function (error) {
// 	console.log(error);
// });
