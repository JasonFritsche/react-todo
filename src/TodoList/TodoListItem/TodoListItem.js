import React, { useState } from "react";
import styled from "styled-components";
import Input from "../Input/Input";

const TodoListItemContainer = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	border: 1px solid rgb(207, 207, 207);
	margin: 0.24em 0;
	padding: 0 0.66em;
`;

const TodoListItemActions = styled.div`
	margin-left: auto;
`;

const TodoListItem = (props) => {
	const [showEditItem, setShowEditItem] = useState(false);
	const [editedItem, setEditedItem] = useState("");

	const { item, deleteItem, updateItem } = { ...props };

	const editTodoListItem = async (e) => {
		await setEditedItem(e.target.value);
	};

	const updateEditedItem = () => {
		updateItem(editedItem);
		setEditedItem("");
		setShowEditItem(false);
	};

	const editItem = () => {
		setShowEditItem(!showEditItem);
		setEditedItem(item);
	};

	return (
		<TodoListItemContainer>
			{showEditItem ? (
				<Input
					inputValue={editedItem}
					inputValueChange={editTodoListItem}
					updateValue={updateEditedItem}
				/>
			) : (
				<p>{item}</p>
			)}
			<TodoListItemActions>
				<button onClick={editItem}>Edit</button>
				<button onClick={deleteItem}>Delete</button>
			</TodoListItemActions>
		</TodoListItemContainer>
	);
};

export default TodoListItem;
