import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getUserToken, removeUserToken } from "hooks/useLocalStorage";
import styles from "./ToDo.module.css";
import TodoList from "../todo_list/TodoList";

const ToDo = () => {
	let navigate = useNavigate();
	const userToken = getUserToken();

	const handleLogOut = () => {
		removeUserToken(userToken);
		alert("로그아웃 되었습니다. 다시 로그인 해주세요.");
		navigate("/");
	};

	useEffect(() => {
		if (!userToken) {
			alert("로그인 해주세요.");
			navigate("/");
		}
	}, [userToken]);

	return (
		<>
			<nav className={styles.nav}>
				{userToken && (
					<button onClick={handleLogOut} className={styles.button}>
						LOGOUT
					</button>
				)}
			</nav>
			<section>
				<TodoList />
			</section>
		</>
	);
};

export default ToDo;
