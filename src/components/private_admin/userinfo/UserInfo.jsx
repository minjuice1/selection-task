import { axiosPrivate } from "api/axios";
import React, { useEffect, useState } from "react";
import styles from "./UserInfo.module.css";

const UserInfo = ({ user, auth }) => {
	const [userInfo, setUserInfo] = useState();
	console.log("아이디 :", user);

	useEffect(() => {
		let isMounted = true;
		const getSelectedUser = async () => {
			try {
				// const response = await getUserFetch(token, userId);
				const userId = user;
				const token = auth?.accessToken;
				const response = await axiosPrivate.get(`/users/${userId}`, {
					headers: { Authorization: `Bearer ${token}` },
					withCredentials: true,
				});
				console.log(response);
				isMounted && setUserInfo(response);
			} catch (err) {
				console.error(err);
			}
		};

		getSelectedUser();

		return () => {
			isMounted = false;
		};
	}, [user]);

	return (
		<section className={styles.container}>
			<h2 className={styles.title}>List of all user </h2>
			<div className={styles.idInfo}>
				ID: <input value={userInfo?.username} className={styles.id} />
			</div>
			<div className={styles.pwdInfo}>
				<span>
					PWD: <input value={userInfo?.password} className={styles.pwd} />
				</span>
			</div>
			<div className={styles.roleInfo}>
				<span>
					ROLE: <input value={userInfo?.roles} className={styles.role} />
				</span>
			</div>
		</section>
	);
};

export default UserInfo;
