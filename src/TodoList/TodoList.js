import React, { Component } from "react";
import styled from "styled-components";
import Input from "./Input/Input";
import ListItem from "./TodoListItem/TodoListItem";

const TodoListContainer = styled.div`
	flex-wrap: wrap;
	display: flex;
	flex-direction: row;
	margin: 0;
	justify-content: center;
`;

const TodoListItemsContainer = styled.ul`
	margin: 1em 0;
	display: flex;
	flex-direction: column;
`;

export default class TodoList extends Component {
	state = {
		todoItems: [],
		inputValue: "",
	};

	inputValueChange = async (e) => {
		await this.setState({ inputValue: e.target.value });
	};

	updateListItems = async () => {
		const items = [...this.state.todoItems];
		items.push({
			name: this.state.inputValue,
			id: new Date().getUTCMilliseconds().toString(),
		});
		await this.setState({ todoItems: items, inputValue: "" });
	};

	deleteItem = (id) => {
		let items = [...this.state.todoItems.filter((item) => item.id !== id)];
		this.setState({ todoItems: items });
	};

	updateItem = async (itemValue, itemId) => {
		const items = [...this.state.todoItems];
		let index = items.findIndex((item) => item.id === itemId);
		items[index].name = itemValue;
		await this.setState({ todoItems: items });
	};

	render() {
		return (
			<TodoListContainer>
				<h1>this is the list</h1>
				<Input
					inputType='list'
					centerInput={true}
					inputValue={this.state.inputValue}
					inputValueChange={(e) => this.inputValueChange(e)}
					updateValue={() => this.updateListItems()}
				/>
				<TodoListItemsContainer>
					{this.state.todoItems.map((item) => (
						<ListItem
							item={item.name}
							deleteItem={() => this.deleteItem(item.id)}
							updateItem={(e) => this.updateItem(e, item.id)}
							key={item.id}
						/>
					))}
				</TodoListItemsContainer>
			</TodoListContainer>
		);
	}
}
