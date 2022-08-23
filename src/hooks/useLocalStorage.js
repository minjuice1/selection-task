export const updateUserToken = (token) => {
	let tokenKey = "";
	for (const [key, value] of Object.entries(token)) {
		tokenKey = key;
		localStorage.setItem(key, value);
	}
	return getUserToken(tokenKey);
};

export const getUserToken = (tokenKey) => {
	return localStorage.getItem(tokenKey);
};

export const removeUserToken = (token) => {
	localStorage.removeItem(token);
	return null;
};
