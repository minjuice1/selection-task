import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styles from "./App.module.css";
import Login from "./pages/auth/login/Login";
import SignUp from "./pages/auth/signup/SignUp";
import ToDo from "./pages/todos/todo/ToDo";
import NotFound from "./pages/not_found/NotFound";
import TodoList from "pages/todos/todo_list/TodoList";

function App() {
	const [token, setToken] = useState();
	const [todos, setTodos] = useState([]);

	return (
		<div className={styles.app}>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Login setToken={setToken} />} />
					<Route path='/signup' element={<SignUp />} />
					<Route
						path='/todo'
						element={
							<ToDo authToken={token} setTodos={setTodos} todos={todos} />
						}
					>
						<Route path=':todoId' element={<TodoList />} />
					</Route>
					<Route path='*' element={<NotFound />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
