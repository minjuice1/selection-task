import React from "react";
import styles from "./TodoList.module.css";

const TodoList = () => {
	return (
		<div className={styles.todos}>
			<h1 className={styles.title}>Todo List</h1>

			<div className={styles.todo}>
				<div>
					<span className={styles.ordered}>1.</span>
					<input id='checkBox' type='checkBox' className={styles.checkBox} />
					<label htmlFor='checkBox' className={styles.label}>
						REACT 공부
					</label>
				</div>
				<div className={styles.buttons}>
					<button className={styles.editButton}>수정</button>
					<button className={styles.deleteButton}>삭제</button>
				</div>
			</div>
		</div>
	);
};

export default TodoList;
