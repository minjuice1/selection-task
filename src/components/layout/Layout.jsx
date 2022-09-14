import TodoNav from "components/nav/Nav";
import React from "react";
import { Outlet } from "react-router-dom";
import style from "./Layout.module.css";

const Layout = () => {
	return (
		<main className={style.app}>
			<TodoNav />
			<Outlet />
		</main>
	);
};

export default Layout;
