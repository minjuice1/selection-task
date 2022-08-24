import axios from "axios";

const BASE_URL =
	"https://5co7shqbsf.execute-api.ap-northeast-2.amazonaws.com/production";

const createTodoFetch = async (token, todo) => {
	console.log("token");
	const res = await axios({
		method: "POST",
		url: BASE_URL + "/todos",
		headers: { Authorization: `Bearer ${token}` },
		data: {
			todo: todo,
		},
	});
	return res.data;
};

const getTodoFetch = async (token) => {
	console.log("getTodoFetch");
	const res = await axios({
		method: "GET",
		url: BASE_URL + "/todos",
		headers: { Authorization: `Bearer ${token}` },
	});
	return res.data;
};

const deleteTodoFetch = async (token, id) => {
	const res = await axios({
		method: "DELETE",
		url: BASE_URL + "/todos" + `/${id}`,
		headers: { Authorization: `Bearer ${token}` },
	});
	console.log("Todo삭제", res);
};

const updateTodoFetch = async (token, id, todo, isCompleted) => {
	const res = await axios({
		method: "PUT",
		url: BASE_URL + "/todos" + `/${id}`,
		headers: { Authorization: `Bearer ${token}` },
		data: {
			todo: todo,
			isCompleted: isCompleted,
		},
	});
	console.log("Todo수정", res);
};

// .then(function (response) {
// 	console.log(response);
// })
// .catch(function (error) {
// 	console.log(error);
// });

export { createTodoFetch, getTodoFetch, deleteTodoFetch, updateTodoFetch };
