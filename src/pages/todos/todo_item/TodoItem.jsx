import React, { useRef, useState } from "react";
import { deleteTodoFetch, updateTodoFetch, updateCheckFetch } from "services";
import styles from "./TodoItem.module.css";

const TodoItem = ({ id, todo, isCompleted, authToken, fetchTodo }) => {
	const [editMode, setEditMode] = useState(false);
	const [Ischecked, setIsChecked] = useState(isCompleted);
	const editRef = useRef();

	const handleDeleteTodo = async () => {
		await deleteTodoFetch(authToken, id);
		await fetchTodo();
	};

	const handleChangeCheckBox = async () => {
		setIsChecked(!Ischecked);
		await updateCheckFetch(authToken, id, todo, Ischecked);
	};

	const handleUpdatedTodo = async () => {
		const updatedTodo = await editRef.current.value;
		await updateTodoFetch(authToken, id, updatedTodo, isCompleted);
		setEditMode(false);
		await fetchTodo();
	};
	return (
		<div className={styles.todo} key={id}>
			<div className={styles.wrapper}>
				<input
					type='checkBox'
					checked={Ischecked}
					onChange={handleChangeCheckBox}
					className={styles.checkBox}
				/>
				{editMode ? (
					<input
						defaultValue={todo}
						ref={editRef}
						type='text'
						className={styles.editMode}
					/>
				) : (
					<label className={styles.label}>{todo}</label>
				)}
			</div>
			<div className={styles.buttons}>
				<button
					onClick={editMode ? handleUpdatedTodo : () => setEditMode(true)}
					className={styles.editButton}
				>
					{editMode ? "완료" : "수정"}
				</button>
				<button
					onClick={editMode ? () => setEditMode(false) : handleDeleteTodo}
					className={styles.deleteButton}
				>
					{editMode ? "취소" : "삭제"}
				</button>
			</div>
		</div>
	);
};

export default TodoItem;
