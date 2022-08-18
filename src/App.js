import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./pages/auth/login/Login";
import SignUp from "./pages/auth/signup/SignUp";
import Todo from "./pages/todos/todo/Todo";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/login' element={<Login />} />
				<Route path='/signup' element={<SignUp />} />
				<Route path='/' element={<Todo />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
