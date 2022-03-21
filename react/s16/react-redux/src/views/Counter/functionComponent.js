import { Card, Button, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
	increment,
	decrement,
	customIncrement,
} from "./../../redux/actions/counterAction";

const FunctionComponent = () => {
	const totalCount = useSelector((state) => state.counter);
	const dispatch = useDispatch();

	return (
		<Card>
			<Card.Header>
				Counter with <strong>Functional Component</strong>
			</Card.Header>
			<Card.Body className="text-center">
				<Card.Title>{totalCount}</Card.Title>
				<Col className="my-4">
					<Button
						onClick={() => dispatch(decrement())}
						variant="outline-primary"
						className="m-2"
					>
						(-) Decrement
					</Button>
					<Button
						onClick={() => dispatch(increment())}
						variant="primary"
						className="m-2"
					>
						(+) Increment
					</Button>
				</Col>
				<Button
					onClick={() => dispatch(customIncrement(5))}
					variant="danger"
				>
					(+5) Custom Increment
				</Button>
			</Card.Body>
		</Card>
	);
};

export default FunctionComponent;
