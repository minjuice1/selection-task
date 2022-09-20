import { atom, selector } from "recoil";

const useAuth = atom({
	key: "useAuth",
	default: 0,
});

const getAuth = selector({
	key: "getAuth",
	get: ({ get }) => {
		const auth = get(useAuth);
		return auth;
	},
});

export { useAuth, getAuth };
