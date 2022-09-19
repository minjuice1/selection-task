import React, { useState } from "react";
import { useEffect } from "react";
import { Auth } from "context/recoil";
import { useRecoilState } from "recoil";
import getUsersFetch from "services/user";
import styles from "./UserList.module.css";

const Users = () => {
	const [users, setUsers] = useState();
	const auth = useRecoilState(Auth);

	useEffect(() => {
		let isMounted = true;

		const getUsers = async () => {
			try {
				const token = auth[0]?.accessToken;
				const res = await getUsersFetch(token);
				isMounted && setUsers(res);
			} catch (err) {
				console.error(err);
			}
		};
		getUsers();

		return () => {
			isMounted = false;
		};
	}, []);

	const whichRole = (user) => {
		if (user?.roles?.Admin) {
			return "Admin";
		} else if (users?.roles?.Manager) {
			return "Manager";
		} else {
			return "User";
		}
	};

	return (
		<article className={styles.container}>
			<h2 className={styles.title}>List of all user </h2>
			{users?.length ? (
				<ol>
					{users.map((user, i) => (
						<li key={i}>
							<a className={styles.id}>ID : {user?.username}</a>
							<br />
							<span className={styles.role}>ROLE : {whichRole(user)}</span>
						</li>
					))}
				</ol>
			) : (
				<p className={styles.nolist}>User list does not exist.</p>
			)}
		</article>
	);
};

export default Users;
