import React from "react";
import "../../App.css";
import TodoForm from "./TodoForm";

function List() {
	const [todos, setTodos] = React.useState([]);

	const addTodo = (text) => {
		const newTodos = [...todos, text];
		setTodos(newTodos);
	};

	const removeTodo = () => {
		const newTodos = [...todos];
		newTodos.pop();
		setTodos(newTodos);
	};

	return (
		<>
			<TodoForm addTodo={addTodo} removeTodo={removeTodo} />
			{todos && todos.length ? (
				<div className="list-items">
					{todos.map((dt, i) => (
						<>
							{i !== 0 && i !== dt.length - 1 ? (
								<p className="d-flex align-items-center">
									=&gt;
								</p>
							) : (
								""
							)}

							<div key={i} className="items">
								<p>{dt}</p>
							</div>
						</>
					))}
				</div>
			) : (
				<p> [Antrian kosong !] </p>
			)}
		</>
	);
}

export default List;
