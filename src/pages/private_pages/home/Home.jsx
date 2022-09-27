import React from "react";
import { Link } from "react-router-dom";
import styles from "./Home.module.css";

const home = () => {
	return (
		<section>
			<h2 className={styles.title}>Public</h2>
			<p>
				<Link to='/login'>Login</Link>
			</p>
			<p>
				<Link to='/register'>Register</Link>
			</p>
			<h2 className={styles.title}>Private</h2>
			<p>
				<Link to='/manager'>Manager Page</Link>
			</p>
			<Link to='/admin'>Admin Page</Link>
		</section>
	);
};

export default home;
