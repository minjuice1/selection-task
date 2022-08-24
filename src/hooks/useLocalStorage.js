export const updateUserToken = (token) => {
	let tokenKey = "";
	for (const [key, value] of Object.entries(token)) {
		tokenKey = key;
		localStorage.setItem(key, value);
	}
	return getUserToken(tokenKey);
};

export const getUserToken = () => {
	return localStorage.getItem("access_token");
};

export const removeUserToken = (token) => {
	localStorage.removeItem(token);
	return null;
};
