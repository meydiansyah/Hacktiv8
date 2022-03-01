import React from "react";
import "../../App.css";

function TodoForm({ addTodo, removeTodo }) {
	const [value, setValue] = React.useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!value) return;
		addTodo(value);
		setValue("");
	};

	return (
		<form onSubmit={handleSubmit}>
			<input
				type="text"
				className="input"
				value={value}
				onChange={(e) => setValue(e.target.value)}
			/>
			<div className="pt-2">
				<button type="submit" className="mx-5">
					Antrikan !
				</button>
				<button type="button" className="mx-5" onClick={removeTodo}>
					Majukan !
				</button>
			</div>
		</form>
	);
}

export default TodoForm;
