import { React } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "components/layout/Layout";
import Login from "./pages/public_pages/login/Login";
import Register from "./pages/public_pages/register/Register";
import Todo from "./pages/todos/todo/Todo";
import Unauthorized from "pages/unauthorized/Unauthorized";
import RequireAuth from "components/RequireAuth";
import Home from "pages/private_pages/home/Home";
import Admin from "pages/private_pages/admin/Admin";
import Manager from "pages/private_pages/manager/Manager";
import NotFound from "./pages/not_found/NotFound";
import LinkPage from "pages/public_pages/link/LinkPage";
import PersistLogin from "components/PersistLogin";

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

				<Route path='unauthorized' element={<Unauthorized />} />

				{/* 잠시 보류 */}
				<Route path='todo' element={<Todo />} />

				{/* 관리자 페이지 */}
				<Route element={<PersistLogin />}>
					<Route element={<RequireAuth allowedRoles={[ROLES.User]} />}>
						<Route path='/' element={<Home />} />
					</Route>
					<Route element={<RequireAuth allowedRoles={[ROLES.Manager]} />}>
						<Route path='manager' element={<Manager />} />
					</Route>
					<Route element={<RequireAuth allowedRoles={[ROLES.Admin]} />}>
						<Route path='admin' element={<Admin />} />
					</Route>
				</Route>

				<Route path='*' element={<NotFound />} />
			</Route>
		</Routes>
	);
}
export default App;
