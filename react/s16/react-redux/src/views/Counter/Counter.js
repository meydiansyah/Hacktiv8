import { Container } from "react-bootstrap";
import ClassComponent from "./classComponent";
import FunctionComponent from "./functionComponent";

function Counter() {
	return (
		<Container className="d-flex flex-column align-items-center">
			<p className="text-muted">
				Press button below to <strong>Increment</strong> or{" "}
				<strong>Decrement</strong> the value.
			</p>
			<ClassComponent />
			<div className="my-2"></div>
			<FunctionComponent />
		</Container>
	);
}

export default Counter;
