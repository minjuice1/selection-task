import React, { useState } from "react";
import { useEffect } from "react";
import { Auth } from "context/recoil";
import { useRecoilState } from "recoil";
import getUsersFetch from "services/user";

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

	return (
		<>
			<h2>Users List</h2>
			{users?.length ? (
				<ul>
					{users.map((user, i) => (
						<li key={i}>{user?.username}</li>
					))}
				</ul>
			) : (
				<p>현재 Users List가 비었습니다.</p>
			)}
		</>
	);
};

export default Users;
