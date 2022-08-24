import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./NotFound.module.css";

const NotFound = () => {
	let navigate = useNavigate();

	return (
		<div className={styles.container}>
			<div className={styles.title}>유효하지 않는 페이지입니다.</div>
			<button onClick={() => navigate("/")} className={styles.home}>
				Home
			</button>
		</div>
	);
};

export default NotFound;
