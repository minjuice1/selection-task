const updateUserToken = (token) => {
	let tokenKey = "";
	for (const [key, value] of Object.entries(token)) {
		tokenKey = key;
		localStorage.setItem(key, value);
	}
	return getUserToken(tokenKey);
};

const getUserToken = () => {
	return localStorage.getItem("access_token");
};

const removeUserToken = () => {
	localStorage.removeItem("access_token");
};

export { updateUserToken, getUserToken, removeUserToken };
