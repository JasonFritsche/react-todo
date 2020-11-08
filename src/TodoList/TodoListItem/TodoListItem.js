import React, { useState } from "react";
import styled from "styled-components";
import { Edit, Close } from "@styled-icons/material";
import Input from "../Input/Input";

const TodoListItemContainer = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	border: 1px solid rgb(207, 207, 207);
	padding: 0 0.66em;
	width: 33vw;
	height: 2.8em;
	margin-bottom: 0.3em;
`;

const EditTodoItem = styled(Edit)`
	color: #ff7700;
	&:hover {
		cursor: pointer;
		color: #ffaa00;
	}
`;

const DeleteTodoItem = styled(Close)`
	color: #a80011;
	&:hover {
		cursor: pointer;
		color: #30214f;
	}
`;

const TodoListItemActions = styled.div`
	display: flex;
	flex-direction: row;
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
					inputType='listItem'
					inputValue={editedItem}
					inputValueChange={editTodoListItem}
					updateValue={updateEditedItem}
					buttonText='Save Changes'
				/>
			) : (
				<p>{item}</p>
			)}
			<TodoListItemActions>
				<EditTodoItem size='24' onClick={editItem} />
				<DeleteTodoItem size='24' onClick={deleteItem} />
			</TodoListItemActions>
		</TodoListItemContainer>
	);
};

export default TodoListItem;
