import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { axiosPrivate } from "api/axios";
import useAuthState from "hooks/useAuthState";
import UserList from "components/private_admin/userlist/UserList";
import UserInfo from "components/private_admin/userinfo/UserInfo";
import styles from "./Admin.module.css";

const Admin = () => {
	const [users, setUsers] = useState();
	const [IsClick, setIsClick] = useState(false);
	const [selectedUserId, setSelectedUserId] = useState("");
	const auth = useAuthState();
	const navigate = useNavigate();
	const location = useLocation();
	console.log(users);

	useEffect(() => {
		let isMounted = true;

		const getAllUsers = async () => {
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

		getAllUsers();

		return () => {
			isMounted = false;
		};
	}, []);

	// useEffect(() => {
	// 	if (IsClick) {
	// 		display = "userListBox";
	// 	} else {
	// 		display = "userWrapBox";
	// 	}
	// }, [IsClick]);

	return (
		<div className={styles.container}>
			<h1 className={styles.pageTitle}> Admin Page</h1>
			<div className={styles.section}>
				<article
					className={
						IsClick
							? `${styles.userBox} ${styles.userWrapBox}`
							: `${styles.userBox} ${styles.userListBox}`
					}
				>
					<h2 className={styles.title}>List of all user </h2>
					{users?.length ? (
						<ol className={styles.userList}>
							{users.map((user) => (
								<UserList
									key={user._id}
									user={user}
									handleUserInfo={setIsClick}
									display={IsClick}
									selectedUserId={setSelectedUserId}
								/>
							))}
						</ol>
					) : (
						<p className={styles.nolist}>User list does not exist.</p>
					)}
				</article>
				{IsClick && <UserInfo token={auth} user={selectedUserId} />}
			</div>
		</div>
	);
};

export default Admin;
