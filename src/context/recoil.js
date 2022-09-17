import { atom, selector } from "recoil";

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

export { setAuth, Auth };
