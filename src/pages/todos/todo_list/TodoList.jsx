import React from "react";
import TodoItem from "../todo_item/TodoItem";
import styles from "./TodoList.module.css";

const TodoList = ({ todos, authToken, fetchTodo }) => {
	return (
		<div className={styles.todos}>
			{todos.map((todo) => (
				<TodoItem
					key={todo.id}
					id={todo.id}
					todo={todo.todo}
					isCompleted={todo.isCompleted}
					authToken={authToken}
					fetchTodo={fetchTodo}
				/>
			))}
		</div>
	);
};

export default TodoList;
