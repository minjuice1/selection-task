import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { registerFetch } from "services";
import styles from "./Register.module.css";

const Register = () => {
	let navigate = useNavigate();

	const [userVaildCheck, setUserVaildCheck] = useState({
		user: "",
		pwd: "",
	});

	const hangleChange = (e) => {
		setUserVaildCheck({
			...userVaildCheck,
			[e.target.name]: e.target.value,
		});
	};

	const handleSignUp = async (e) => {
		e.preventDefault();
		const user = e.target.user.value;
		const pwd = e.target.pwd.value;
		try {
			await registerFetch(user, pwd);
			alert("회원가입 완료. 로그인 해주세요.");
			navigate("/");
		} catch (err) {
			if (!err?.response) {
				alert("No Server Response");
			} else if (err.response?.status === 401) {
				alert("Unauthorized");
			} else if (err.response?.status === 409) {
				alert("Please, Use Another Username");
			} else {
				alert("Sign Up Failed");
			}
		}
	};

	const filledForm = () => {
		if (userVaildCheck.user.length && userVaildCheck.pwd.length >= 4) {
			return true;
		}
	};

	return (
		<div className={styles.container}>
			<h1 className={styles.title}>SignUp</h1>
			<form onSubmit={handleSignUp} className={styles.userForm}>
				<div>
					<label htmlFor='user'>user </label>
					<input
						required
						type='text'
						name='user'
						maxLength='15'
						value={userVaildCheck.user}
						onChange={hangleChange}
					/>
				</div>
				<div>
					<label htmlFor='pwd'>password </label>
					<input
						required
						type='password'
						name='pwd'
						maxLength='12'
						minLength='4'
						autoComplete='off'
						value={userVaildCheck.pwd}
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
				<Link to='/login'>
					<button className={styles.login}>Login</button>
				</Link>
			</div>
		</div>
	);
};

export default Register;
