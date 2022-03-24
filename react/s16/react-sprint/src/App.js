import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { SprintCard } from "./components";
import { useSelector } from "react-redux";
import { listSprint } from "./features/sprint/sprintSlice";
import { useDispatch } from "react-redux";
import { addBacklog } from "./features/sprint/sprintSlice";

function App() {
	const sprint = useSelector(listSprint);
	const dispatch = useDispatch();
	const [newTask, setNewTask] = useState("");

	const add = () => {
		if (newTask.trim() !== "") {
			setNewTask("");
			return dispatch(addBacklog(newTask));
		}
	};

	return (
		<Container className="vh-100 ">
			<h2 className="pt-4">Bindev {sprint.tmpTitle}</h2>
			{sprint.data.map((data, id) => {
				return <p key={id}>{data.title}</p>;
			})}
			<hr />
			<div className="d-flex pb-4 ">
				<input
					className="flex-grow-1 p-2"
					aria-label="Set increment amount"
					value={newTask}
					placeholder="Input new task"
					onChange={(e) => setNewTask(e.target.value)}
				/>
				<Button style={{ marginLeft: "20px" }} onClick={add}>
					Add
				</Button>
			</div>
			<Row>
				<SprintCard
					title="Backlog"
					bg="bg-secondary-200"
					data={sprint.backlog}
				/>
				<SprintCard
					title="In Progress"
					bg="bg-warning-200"
					data={sprint.inProgress}
				/>
				<SprintCard
					title="Evaluation"
					bg="bg-primary-200"
					data={sprint.evaluation}
				/>
				<SprintCard
					title="Done"
					bg="bg-success-200"
					data={sprint.done}
				/>
			</Row>
		</Container>
	);
}

export default App;
