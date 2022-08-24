import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signupFetch } from "services";
import styles from "./Signup.module.css";

const SignUp = () => {
	let navigate = useNavigate();

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

	const handleSignUp = async (e) => {
		e.preventDefault();
		const email = e.target.email.value;
		const password = e.target.password.value;
		try {
			await signupFetch(email, password);
			alert("회원가입 완료. 로그인 해주세요.");
			navigate("/");
		} catch (e) {
			alert("회원가입 오류 발생");
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
			<h1 className={styles.title}>SignUp</h1>
			<form onSubmit={handleSignUp} className={styles.userForm}>
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
					SignUp
				</button>
			</form>
			<div className={styles.goLogin}>
				이미 회원가입 하셨다면?
				<Link to='/'>
					<button className={styles.login}>Login</button>
				</Link>
			</div>
		</div>
	);
};

export default SignUp;
