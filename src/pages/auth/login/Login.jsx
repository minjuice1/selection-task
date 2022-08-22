import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getUserToken, updateUserToken } from "../../../hooks/useLocalStorage";
import { signinFetch } from "../../../services/user";
import styles from "./Login.module.css";

const Login = () => {
	let navigate = useNavigate();
	const userToken = getUserToken();

	const [userVaildCheck, setUserVaildCheck] = useState({
		email: "",
		password: "",
	});

	const hangleChange = (e) => {
		setUserVaildCheck({
			...userVaildCheck,
			[e.target.name]: e.target.value,
		});
	};

	useEffect(() => {
		if (userToken) {
			navigate("/todo");
		}
	}, [userToken]);

	const handleLogin = async (e) => {
		e.preventDefault();
		const email = e.target.email.value;
		const password = e.target.password.value;
		try {
			await signinFetch(email, password) //
				.then((token) => updateUserToken(token));
			navigate("/todo");
			alert("로그인 성공!");
		} catch (e) {
			alert("로그인 오류 발생");
		}
	};

	const filledForm = () => {
		if (
			userVaildCheck.email.includes("@") &&
			userVaildCheck.password.length >= 8
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
						value={userVaildCheck.email}
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
						value={userVaildCheck.password}
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
