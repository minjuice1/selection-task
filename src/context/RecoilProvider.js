import { atom, selector } from "recoil";

const useAuth = atom({
	key: "useAuth",
	default: "",
});

const getAuth = selector({
	key: "getAuth",
	get: ({ get }) => {
		const auth = get(useAuth);
		return auth;
	},
});

const usePersist = atom({
	key: "usePersist",
	default: JSON.parse(localStorage.getItem("persist")) || false,
});

const getPersist = selector({
	key: "getPersist",
	get: ({ get }) => {
		const persist = get(usePersist);
		return persist;
	},
});

export { useAuth, getAuth, usePersist, getPersist };
