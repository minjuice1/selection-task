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

const removeUserToken = (token) => {
	localStorage.removeItem(token);
	return null;
};

export { updateUserToken, getUserToken, removeUserToken };
