// import getAllUsersFetch from "services/user";
import whichRole from "hooks/userWhichRole";
import React from "react";
import styles from "./UserList.module.css";

const Users = ({ user, handleUserInfo, display, selectedUserId }) => {
	/* getUserFetch 분리 시도 */

	// useEffect(() => {
	// 	let isMounted = true;

	// 	const getUsers = async () => {
	// 		try {
	// 			const token = auth[0]?.accessToken;
	// 			const res = await getAllUsersFetch(token);
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

	const Clickhandle = () => {
		selectedUserId(user._id);
		handleUserInfo(true);
	};

	return (
		<>
			<li
				key={user._id}
				className={display ? `${styles.wrapType}` : `${styles.listType}`}
			>
				<a onClick={Clickhandle} className={styles.id}>
					ID : {user?.username}
				</a>
				<br />
				<span className={styles.role}>ROLE : {whichRole(user)}</span>
			</li>
		</>
	);
};

export default Users;
