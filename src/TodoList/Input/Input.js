import styled from "styled-components";

const TodoListInput = styled.div`
	display: flex;
	flex-direction: row;
`;

const Input = (props) => {
	const { inputValue, inputValueChange, updateValue } = { ...props };
	return (
		<TodoListInput>
			<input type='text' value={inputValue} onChange={inputValueChange} />
			<button onClick={updateValue}>Add Item</button>
		</TodoListInput>
	);
};

export default Input;
