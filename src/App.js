import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styles from "./App.module.css";
import Login from "./pages/auth/login/Login";
import SignUp from "./pages/auth/signup/SignUp";
import ToDo from "./pages/todos/todo/ToDo";
import NotFound from "./pages/not_found/NotFound";
import TodoDetail from "./pages/todos/todo_item/TodoDetail";

function App() {
	return (
		<div className={styles.app}>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Login />} />
					<Route path='/signup' element={<SignUp />} />
					<Route path='/todo' element={<ToDo />}>
						<Route path=':userId' element={TodoDetail} />
					</Route>
					<Route path='*' element={<NotFound />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
