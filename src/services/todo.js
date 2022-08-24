import axios from "axios";

const BASE_URL =
	"https://5co7shqbsf.execute-api.ap-northeast-2.amazonaws.com/production";

const createTodoFetch = async (token, todo) => {
	await axios({
		method: "POST",
		url: BASE_URL + "/todos",
		headers: { Authorization: `Bearer ${token}` },
		data: {
			todo: todo,
		},
	});
};

const getTodoFetch = async (token) => {
	const res = await axios({
		method: "GET",
		url: BASE_URL + "/todos",
		headers: { Authorization: `Bearer ${token}` },
	});
	return res.data;
};

const deleteTodoFetch = async (token, id) => {
	await axios({
		method: "DELETE",
		url: BASE_URL + "/todos" + `/${id}`,
		headers: { Authorization: `Bearer ${token}` },
	});
};

const updateCheckFetch = async (token, id, todo, isCompleted) => {
	await axios({
		method: "PUT",
		url: BASE_URL + "/todos" + `/${id}`,
		headers: { Authorization: `Bearer ${token}` },
		data: {
			todo: todo,
			isCompleted: !isCompleted,
		},
	});
};

const updateTodoFetch = async (token, id, todo, isCompleted) => {
	await axios({
		method: "PUT",
		url: BASE_URL + "/todos" + `/${id}`,
		headers: { Authorization: `Bearer ${token}` },
		data: {
			todo: todo,
			isCompleted: isCompleted,
		},
	});
};

export {
	createTodoFetch,
	getTodoFetch,
	deleteTodoFetch,
	updateTodoFetch,
	updateCheckFetch,
};
