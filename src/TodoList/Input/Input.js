import styled from "styled-components";

const TodoListInput = styled.div`
	display: flex;
	flex-direction: row;
	width: 100%;
	justify-content: ${(props) =>
		props.inputType === "list" ? "center" : "start"};
`;

const TodoInput = styled.input`
	height: 2em;
	border: none;
	border-bottom: 1px solid #4d4d4d;
	&:focus {
		outline: none;
		border-bottom: 2px solid #242424;
	}
`;

const Button = styled.button`
	background: transparent;
	border-radius: 2px;
	border: 1.5px solid #0352fc;
	color: #0352fc;
	margin: 0 0.7em;
	padding: 0.25em 1em;
	height: 2.25em;
	&:hover {
		cursor: pointer;
		background: #0352fc;
		color: #edf2fc;
	}
`;

const Input = (props) => {
	const { inputValue, inputValueChange, updateValue, inputType } = {
		...props,
	};
	return (
		<TodoListInput inputType={inputType}>
			<TodoInput type='text' value={inputValue} onChange={inputValueChange} />
			<Button onClick={updateValue}>
				{inputType === "list" ? "Add Item" : "Save Changes"}
			</Button>
		</TodoListInput>
	);
};

export default Input;
