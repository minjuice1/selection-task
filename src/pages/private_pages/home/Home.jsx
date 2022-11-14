import React from "react";
import { Link } from "react-router-dom";
import styles from "./Home.module.css";

const home = () => {
	return (
		<section className={styles.container}>
			{/* <h2 className={styles.title}>Public</h2> */}
			<fieldset className={styles.title}>
				<legend>Public</legend>
				<p className={styles.links}>
					<Link className={styles.linkTitle} to='/login'>
						Login
					</Link>
				</p>
				<p className={styles.links}>
					<Link className={styles.linkTitle} to='/register'>
						Register
					</Link>
				</p>
			</fieldset>
			<fieldset className={styles.title}>
				<legend>Private</legend>
				<p className={styles.links}>
					<Link className={styles.linkTitle} to='/manager'>
						Manager Page
					</Link>
				</p>
				<p className={styles.links}>
					<Link className={styles.linkTitle} to='/admin'>
						Admin Page
					</Link>
				</p>
			</fieldset>
		</section>
	);
};

export default home;
