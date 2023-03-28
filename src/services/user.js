import useAxiosPrivate from "../hooks/useAxiosPrivate";

const USER_URL = "/users";
const axiosPrivate = useAxiosPrivate();

const getAllUsersFetch = async (token) => {
	const res = await axiosPrivate.get(USER_URL, {
		headers: { Authorization: `Bearer ${token}` },
		withCredentials: true,
	});
	return res.data;
};

const getUserFetch = async (token, id) => {
	const res = await axiosPrivate.get(`${USER_URL}/${id}`, {
		headers: { Authorization: `Bearer ${token}` },
		withCredentials: true,
	});
	return res.data;
};

export { getAllUsersFetch, getUserFetch };
// export default getAllUsersFetch;
