import { atom, selector } from "recoil";

const setLoginState = atom({
	key: "setLoginState",
	default: false,
});

const setRolesState = atom({
	key: "setRolesState",
	default: 2001,
});

const getLoginState = selector({
	key: "getLoginState",
	get: ({ get }) => {
		const accessToken = get(setLoginState);
		if (accessToken) return true;
	},
});

const getRolesState = selector({
	key: "getRolesState",
	get: ({ get }) => {
		const roles = get(setRolesState);
		return roles;
	},
});

export { setLoginState, getLoginState, setRolesState, getRolesState };
