import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Login.module.css";

const Login = () => {
	let navigate = useNavigate();

	const [userLoginInfo, setUserLoginInfo] = useState({
		email: "",
		password: "",
	});
	const hangleChange = (e) => {
		setUserLoginInfo({
			...userLoginInfo,
			[e.target.name]: e.target.value,
		});
	};

	const handleLogin = (e) => {
		e.preventDefault();
		localStorage.setItem("token", JSON.stringify(userLoginInfo));
		navigate("/");
	};

	const filledForm = () => {
		if (
			userLoginInfo.email.includes("@") &&
			userLoginInfo.password.length >= 8
		) {
			return true;
		}
	};

	return (
		<div className={styles.container}>
			<h1 className={styles.title}>Login</h1>
			<form onSubmit={handleLogin} className={styles.userForm}>
				<div>
					<label htmlFor='email'>Email </label>
					<input
						required
						type='email'
						name='email'
						value={userLoginInfo.email}
						onChange={hangleChange}
					/>
				</div>
				<div>
					<label htmlFor='password'>password </label>
					<input
						required
						type='password'
						name='password'
						maxLength='16'
						minLength='8'
						autoComplete='off'
						value={userLoginInfo.password}
						onChange={hangleChange}
					/>
				</div>
				<button
					disabled={!filledForm()}
					className={styles.submitButton}
					type='submit'
				>
					Login
				</button>
			</form>
			<div className={styles.goLogin}>
				아직 회원가입을 안 하셨다면?
				<Link to='/signup'>
					<button className={styles.login}>SignUp</button>
				</Link>
			</div>
		</div>
	);
};

export default Login;
