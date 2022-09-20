import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { loginFetch } from "services";
import { useRecoilState } from "recoil";
import { useAuth } from "context/RecoilProvider";
import styles from "./Login.module.css";

const Login = () => {
	const [auth, setAuth] = useRecoilState(useAuth);
	console.log(auth);

	const navigate = useNavigate();
	const location = useLocation();
	const from = location.state?.from?.pathname || "/";

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

	const handleLogin = async (e) => {
		e.preventDefault();
		const user = e.target.user.value;
		const pwd = e.target.pwd.value;
		try {
			const login = await loginFetch(user, pwd);
			setAuth(login);
			alert(`${user}님 반갑습니다!`);
			navigate(from, { replace: true });
		} catch (err) {
			if (!err?.response) {
				alert("No Server Response");
			} else if (err.response?.status === 400) {
				alert("Missing Username or Password");
			} else if (err.response?.status === 401) {
				alert("Invalid Username or Password ");
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
			<h1 className={styles.title}>Login</h1>
			<form onSubmit={handleLogin} className={styles.userForm}>
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
					Login
				</button>
			</form>
			<div className={styles.goLogin}>
				아직 회원가입을 안 하셨다면?
				<Link to='/register'>
					<button className={styles.login}>SignUp</button>
				</Link>
			</div>
		</div>
	);
};

export default Login;
