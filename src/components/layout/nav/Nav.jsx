import React from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { useAuth } from "context/RecoilProvider";
import { logoutFetch } from "services/auth";
import useAuthState from "hooks/useAuthState";
import styles from "./Nav.module.css";

const Nav = () => {
	const [auth, setAuth] = useRecoilState(useAuth);
	const authState = useAuthState();
	const token = authState.accessToken;
	let navigate = useNavigate();

	const handleLogOut = async () => {
		await logoutFetch(token);
		setAuth({});
		alert("로그아웃 되었습니다.");
		navigate("/login");
	};

	return (
		<>
			<nav className={styles.nav}>
				{auth && token && (
					<button onClick={handleLogOut} className={styles.button}>
						LogOut
					</button>
				)}
			</nav>
		</>
	);
};

export default Nav;
