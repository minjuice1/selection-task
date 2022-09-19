import React from "react";
import { Link, useNavigate } from "react-router-dom";
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
			{auth && (
				<nav className={styles.nav}>
					<div className={styles.homeNav}>
						{auth?.roles && (
							<Link to='/' className={styles.home}>
								HOME
							</Link>
						)}
					</div>
					<div className={styles.logoutNav}>
						{auth?.roles?.length === 3 && (
							<div className={styles.admin}>ADMIN MODE</div>
						)}
						{auth && token && (
							<button onClick={handleLogOut} className={styles.logout}>
								LOGOUT
							</button>
						)}
					</div>
				</nav>
			)}
		</>
	);
};

export default Nav;
