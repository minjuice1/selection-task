import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ToDo.module.css";

const ToDo = () => {
	let navigate = useNavigate();

	const authToken = localStorage.getItem("token");

	const handleLogOut = () => {
		localStorage.removeItem("token");
		alert("로그아웃 되었습니다.");
		navigate("/");
	};

	useEffect(() => {
		if (!authToken) {
			alert("로그인을 해주세요");
			navigate("/login");
		}
	});

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

export default ToDo;
