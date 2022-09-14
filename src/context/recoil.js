import { atom, selector } from "recoil";

// const setLoginState = atom({
// 	key: "setLoginState",
// 	default: false,
// });

// const setRolesState = atom({
// 	key: "setRolesState",
// 	default: 2001,
// });

const setAuth = atom({
	key: "setAuth",
	default: 0,
});

const Auth = selector({
	key: "auth",
	get: ({ get }) => {
		const auth = get(setAuth);
		return auth;
	},
});

// const getLoginState = selector({
// 	key: "getLoginState",
// 	get: ({ get }) => {
// 		const accessToken = get(setLoginState);
// 		if (accessToken) return true;
// 	},
// });

// const getRolesState = selector({
// 	key: "getRolesState",
// 	get: ({ get }) => {
// 		const roles = get(setRolesState);
// 		return roles;
// 	},
// });

export { setAuth, Auth };
