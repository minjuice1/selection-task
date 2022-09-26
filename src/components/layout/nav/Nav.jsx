import useAuthState from "hooks/useAuthState";
import React from "react";
import { useNavigate } from "react-router-dom";
import { logoutFetch } from "services/auth";
import styles from "./Nav.module.css";

const Nav = () => {
	const auth = useAuthState();
	let navigate = useNavigate();

	const handleLogOut = async () => {
		const token = auth.accessToken;
		await logoutFetch(token);
		alert("로그아웃 되었습니다.");
		navigate("/login");
	};

	return (
		<>
			<nav className={styles.nav}>
				<button onClick={handleLogOut} className={styles.button}>
					LOGOUT
				</button>
			</nav>
		</>
	);
};

export default Nav;
