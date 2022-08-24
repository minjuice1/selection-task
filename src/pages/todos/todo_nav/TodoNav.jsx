import React from "react";
import { useNavigate } from "react-router-dom";
import { removeUserToken } from "hooks/useLocalStorage";
import styles from "./TodoNav.module.css";

const TodoNav = ({ authToken }) => {
	let navigate = useNavigate();

	const handleLogOut = () => {
		removeUserToken(authToken);
		alert("로그아웃 되었습니다. 다시 로그인 해주세요.");
		navigate("/");
	};

	return (
		<>
			<nav className={styles.nav}>
				{authToken && (
					<button onClick={handleLogOut} className={styles.button}>
						LOGOUT
					</button>
				)}
			</nav>
		</>
	);
};

export default TodoNav;
