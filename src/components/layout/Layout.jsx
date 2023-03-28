import Nav from "components/layout/nav/Nav";
import React from "react";
import { Outlet } from "react-router-dom";
import style from "./Layout.module.css";

const Layout = () => {
	return (
		<div className={style.root}>
			<main className={style.app}>
				<Nav />
				<Outlet />
			</main>
		</div>
	);
};

export default Layout;
