// import getUsersFetch from "services/user";
import React from "react";
import styles from "./UserList.module.css";

const Users = ({ user, id }) => {
	/* getUserFetch 분리 시도 */

	// useEffect(() => {
	// 	let isMounted = true;

	// 	const getUsers = async () => {
	// 		try {
	// 			const token = auth[0]?.accessToken;
	// 			const res = await getUsersFetch(token);
	// 			isMounted && setUsers(res);
	// 		} catch (err) {
	// 			console.error(err);
	// 		}
	// 	};
	// 	getUsers();

	// 	return () => {
	// 		isMounted = false;
	// 	};
	// }, []);

	const whichRole = (user) => {
		if (user?.roles?.Admin) {
			return "Admin";
		} else if (user?.roles?.Manager) {
			return "Manager";
		} else {
			return "User";
		}
	};

	return (
		<>
			<li key={id}>
				<a className={styles.id}>ID : {user?.username}</a>
				<br />
				<span className={styles.role}>ROLE : {whichRole(user)}</span>
			</li>
		</>
	);
};

export default Users;
