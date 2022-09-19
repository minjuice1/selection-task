import UserList from "components/private_admin/userlist/UserList";
import React from "react";
import styles from "./Admin.module.css";

const Admin = () => {
	return (
		<div className={styles.container}>
			<h1> Admin Page</h1>
			<div className={styles.section}>
				<UserList />
				<div className={styles.todo} />
			</div>
		</div>
	);
};

export default Admin;
