import React from "react";
// import { useNavigate } from "react-router-dom";
// import { createTodoFetch, getTodoFetch } from "services";
// import TodoList from "../todo_list/TodoList";
// import TodoNav from "../todo_nav/TodoNav";
// import styles from "./Todo.module.css";

const ToDo = () => {
	// let navigate = useNavigate();

	// const fetchTodo = () => {
	// 	getTodoFetch(authToken) //
	// 		.then((todo) => setTodos(todo));
	// };

	// useEffect(() => {
	// 	fetchTodo();
	// }, [authToken]);

	// useEffect(() => {
	// 	if (!authToken) {
	// 		alert("다시 로그인 해주세요.");
	// 		navigate("/");
	// 	}
	// }, [authToken]);

	// const handleSubmitTodo = async (e) => {
	// 	e.preventDefault();
	// 	const putTodo = e.target.addTodo.value;
	// 	const createTodo = [...todos, { id: todos.id++, todo: putTodo }];
	// 	await setTodos(createTodo);
	// 	await createTodoFetch(authToken, putTodo);
	// 	fetchTodo();
	// 	e.target.addTodo.value = "";
	// };

	return (
		<>
			{/* <TodoNav authToken={authToken} setIsToken={setIsToken} />
			<h1 className={styles.title}>Todo List</h1>
			<form onSubmit={handleSubmitTodo} className={styles.addTodoBox}>
				<input name='addTodo' type='text' className={styles.addTodo} />
				<button type='submit' className={styles.addTodoButton}>
					+
				</button>
			</form>
			<TodoList todos={todos} authToken={authToken} fetchTodo={fetchTodo} /> */}
		</>
	);
};

export default ToDo;
