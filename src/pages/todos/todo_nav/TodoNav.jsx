import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { removeUserToken } from "hooks";
import styles from "./TodoNav.module.css";

const TodoNav = ({ authToken, setIsToken }) => {
	let navigate = useNavigate();

	const handleLogOut = () => {
		removeUserToken(authToken);
		setIsToken(null);
		navigate("/");
	};

	useEffect(() => {}, [authToken]);

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
