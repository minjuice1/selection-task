import React from "react";
import { Outlet } from "react-router-dom";
import style from "./Layout.module.css";

const Layout = () => {
	return (
		<main className={style.app}>
			<Outlet />
		</main>
	);
};

export default Layout;
