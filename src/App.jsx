import { React } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "components/layout/Layout";
import Login from "./pages/auth/login/Login";
import Register from "./pages/auth/register/Register";
import Todo from "./pages/todos/todo/Todo";
import Unanuthorized from "pages/unanuthorized/Unanuthorized";
import RequireAuth from "components/RequireAuth";
import Home from "pages/board/home/Home";
import Admin from "pages/board/admin/Admin";
import Manager from "pages/board/manager/Manager";
import NotFound from "./pages/not_found/NotFound";
import LinkPage from "pages/link/LinkPage";

const ROLES = {
	User: 2001,
	Manager: 1984,
	Admin: 5150,
};

function App() {
	return (
		<Routes>
			<Route path='/' element={<Layout />}>
				<Route path='login' element={<Login />} />
				<Route path='register' element={<Register />} />
				<Route path='linkpage' element={<LinkPage />} />

				<Route path='unauthorized' element={<Unanuthorized />} />

				{/* 잠시 보류 */}
				<Route path='todo' element={<Todo />} />

				{/* 관리자 페이지 */}
				<Route element={<RequireAuth allowedRoles={[ROLES.User]} />}>
					<Route path='/' element={<Home />} />
				</Route>
				<Route element={<RequireAuth allowedRoles={[ROLES.Manager]} />}>
					<Route path='manager' element={<Manager />} />
				</Route>
				<Route element={<RequireAuth allowedRoles={[ROLES.Admin]} />}>
					<Route path='admin' element={<Admin />} />
				</Route>

				<Route path='*' element={<NotFound />} />
			</Route>
		</Routes>
	);
}
export default App;
