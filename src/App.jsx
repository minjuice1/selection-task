import { React } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { getLoginState } from "context/recoil";
import Login from "./pages/auth/login/Login";
import Register from "./pages/auth/register/Register";
import ToDo from "./pages/todos/todo/Todo";
import NotFound from "./pages/not_found/NotFound";
import styles from "./App.module.css";

function App() {
	const allowedLogin = useRecoilState(getLoginState);

	return (
		<div className={styles.app}>
			<Routes>
				<Route
					path='/'
					element={
						allowedLogin ? (
							// <ToDo setTodos={setTodos} todos={todos} />
							<ToDo />
						) : (
							<Navigate replace to='/login' />
						)
					}
				/>
				<Route path='/login' element={<Login />} />
				<Route path='/register' element={<Register />} />
				<Route path='*' element={<NotFound />} />
			</Routes>
		</div>
	);
}
export default App;
