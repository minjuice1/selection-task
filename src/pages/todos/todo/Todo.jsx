import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ToDo.module.css";
import TodoList from "../todo_list/TodoList";
import { createTodoFetch, getTodoFetch } from "services/todo";
import TodoNav from "../todo_nav/TodoNav";

const ToDo = ({ authToken, setTodos, todos }) => {
	let navigate = useNavigate();

	console.log("Todo page");

	const fetchTodo = () => {
		getTodoFetch(authToken) //
			.then((todo) => setTodos(todo));
	};

	useEffect(() => {
		fetchTodo();
	}, []);

	useEffect(() => {
		if (!authToken) {
			alert("다시 로그인 해주세요.");
			navigate("/");
		}
	}, [authToken]);

	const handleSubmitTodo = (e) => {
		e.preventDefault();
		let putTodo = e.target.addTodo.value;
		createTodoFetch(authToken, putTodo);
		fetchTodo();
		e.target.addTodo.value = "";
	};

	return (
		<>
			<TodoNav authToken={authToken} />
			<h1 className={styles.title}>Todo List</h1>
			<form onSubmit={handleSubmitTodo} className={styles.addTodoBox}>
				<input name='addTodo' type='text' className={styles.addTodo} />
				<button type='submit' className={styles.addTodoButton}>
					+
				</button>
			</form>
			<section className={styles.todos}>
				{todos &&
					todos.map((todo) => (
						<TodoList
							key={todo.id}
							id={todo.id}
							todo={todo.todo}
							isCompleted={todo.isCompleted}
							authToken={authToken}
							fetchTodo={fetchTodo}
						/>
					))}
			</section>
		</>
	);
};

export default ToDo;
