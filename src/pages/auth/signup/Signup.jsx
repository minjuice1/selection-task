import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./SignUp.module.css";

const SignUp = () => {
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

	const handleSignUp = (e) => {
		e.preventDefault();
		alert("회원가입 완료. 로그인 해주세요.");
		navigate("/login");
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
			<h1 className={styles.title}>SignUp</h1>
			<form onSubmit={handleSignUp} className={styles.userForm}>
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
				{/* <div>
					<label htmlFor='passwordConfirm'>password Confirm </label>
					<input
						required
						type='password'
						name='passwordConfirm'
						maxLength='16'
						minLength='8'
						autoComplete='off'
						value={userLoginInfo.passwordConfirm}
						onChange={hangleChange}
					/>
				</div> */}
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
				<Link to='/login'>
					<button className={styles.login}>Login</button>
				</Link>
			</div>
		</div>
	);
};

export default SignUp;
