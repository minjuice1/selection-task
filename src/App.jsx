import { React } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/auth/login/Login";
import Register from "./pages/auth/register/Register";
import ToDo from "./pages/todos/todo/Todo";
import NotFound from "./pages/not_found/NotFound";
import styles from "./App.module.css";

function App() {
	return (
		<div className={styles.app}>
			<BrowserRouter>
				<Routes>
					{/* <Route
						path='/'
						element={
							Istoken ? (
								<ToDo setTodos={setTodos} todos={todos} />
							) : (
								<Navigate repace to='/auth/login' />
							)
						}
					/> */}
					<Route path='/' element={<ToDo />} />
					<Route path='/login' element={<Login />} />
					<Route path='/register' element={<Register />} />
					<Route path='*' element={<NotFound />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
