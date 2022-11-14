import useAxiosPrivate from "../hooks/useAxiosPrivate";

const USER_URL = "/users";
const axiosPrivate = useAxiosPrivate();

const getUsersFetch = async (token) => {
	const res = await axiosPrivate.get(USER_URL, {
		headers: { Authorization: `Bearer ${token}` },
		withCredentials: true,
	});
	return res.data;
};

export default getUsersFetch;
