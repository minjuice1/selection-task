import React, { useEffect, useState } from "react";
import UserList from "components/private_admin/userlist/UserList";
import { useLocation, useNavigate } from "react-router-dom";
import { axiosPrivate } from "api/axios";
import useAuthState from "hooks/useAuthState";
import styles from "./Admin.module.css";

const Admin = () => {
	const [users, setUsers] = useState();
	const auth = useAuthState();
	const navigate = useNavigate();
	const location = useLocation();

	useEffect(() => {
		let isMounted = true;

		const getUsers = async () => {
			try {
				const token = auth?.accessToken;
				const response = await axiosPrivate.get("/users", {
					headers: { Authorization: `Bearer ${token}` },
					withCredentials: true,
				});
				console.log(response.data);
				isMounted && setUsers(response.data);
			} catch (err) {
				console.error(err);
				navigate("/login", { state: { from: location }, replace: true });
			}
		};

		getUsers();

		return () => {
			isMounted = false;
		};
	}, []);

	return (
		<div className={styles.container}>
			<h1> Admin Page</h1>
			<div className={styles.section}>
				<article className={styles.userListBox}>
					<h2 className={styles.title}>List of all user </h2>
					{users?.length ? (
						<ol>
							{users.map((user, id) => (
								<UserList key={id} user={user} />
							))}
						</ol>
					) : (
						<p className={styles.nolist}>User list does not exist.</p>
					)}
				</article>
				<div className={styles.todo}>
					<article></article>
				</div>
			</div>
		</div>
	);
};

export default Admin;
