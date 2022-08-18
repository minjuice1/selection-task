import React from "react";
import styles from "./SignUp.module.css";

const SignUp = () => {
	return (
		<div className={styles.container}>
			<h1 className={styles.title}>SignUp</h1>
			<form className={styles.userForm}>
				<div>
					<label htmlFor='email'>Email </label>
					<input type='email' id='email' />
				</div>
				<div>
					<label htmlFor='password'>password </label>
					<input type='password' id='password' autoComplete='off' />
				</div>
				<div>
					<label htmlFor='passwordConfirm'>password Confirm </label>
					<input type='password' id='passwordConfirm' autoComplete='off' />
				</div>
				<input className={styles.submitButton} type='button' value='submit' />
			</form>
		</div>
	);
};

export default SignUp;
