import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styles from "./App.module.css";
import Login from "./pages/auth/login/Login";
import SignUp from "./pages/auth/signup/Signup";
import ToDo from "./pages/todos/todo/Todo";
import NotFound from "./pages/not_found/NotFound";
import TodoList from "pages/todos/todo_list/TodoList";
import { getUserToken } from "hooks/useLocalStorage";

function App() {
	const [todos, setTodos] = useState([]);
	const [Istoken, setIsToken] = useState(null);
	useEffect(() => {
		setIsToken(getUserToken());
	}, [Istoken]);

	return (
		<div className={styles.app}>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Login authToken={Istoken} />} />
					<Route path='/signup' element={<SignUp />} />
					<Route
						path='/todo'
						element={
							<ToDo
								setIsToken={setIsToken}
								authToken={Istoken}
								setTodos={setTodos}
								todos={todos}
							/>
						}
					>
						<Route element={<TodoList />} />
					</Route>
					<Route path='*' element={<NotFound />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
