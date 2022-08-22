export const getUserToken = () => {
	return localStorage.getItem("Token");
};

export const updateUserToken = (token) => {
	localStorage.setItem("Token", JSON.stringify(token));
	return getUserToken(token);
};

export const removeUserToken = () => {
	localStorage.removeItem("Token");
	return null;
};
