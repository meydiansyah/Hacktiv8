import { Row, Col, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import {
	addInProgress,
	addEvaluation,
	addDone,
} from "../../features/sprint/sprintSlice";

const SprintCard = (props) => {
	const dispatch = useDispatch();

	const checkButton = (data) => {
		switch (props.title) {
			case "Backlog":
				return dispatch(addInProgress(data));
			case "In Progress":
				return dispatch(addEvaluation(data));
			case "Evaluation":
				return dispatch(addDone(data));
			default:
				return null;
		}
	};

	const checkTitleButton = () => {
		switch (props.title) {
			case "Backlog":
				return "Take";
			case "In Progress":
				return "Evaluate";
			case "Evaluation":
				return "Done";
			default:
				return "";
		}
	};

	return (
		<Col sm={6} md={3}>
			<div className="my-2 border rounded p-2 pb-4">
				<div className={"p-2 rounded " + props.bg}>
					<p className="m-0 fw-bold">{props.title}</p>
				</div>
				{props.data.map((data, id) => {
					return (
						<div key={id} className="border rounded p-2 my-2">
							<p className="my-2">{data}</p>
							{props.title !== "Done" ? (
								<Button
									onClick={() => checkButton(data)}
									variant="secondary"
									size="sm"
								>
									{checkTitleButton()}
								</Button>
							) : (
								""
							)}
						</div>
					);
				})}
			</div>
		</Col>
	);
};

export default SprintCard;
