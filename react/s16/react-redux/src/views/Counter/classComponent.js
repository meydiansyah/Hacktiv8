import { Component } from "react";
import { Card, Button, Col } from "react-bootstrap";
import { connect } from "react-redux";

class ClassComponent extends Component {
	increment() {
		this.props.dispatch({
			type: "INCREMENT",
		});
	}

	decrement() {
		this.props.dispatch({
			type: "DECREMENT",
		});
	}

	customIncrement(val) {
		this.props.dispatch({
			type: "CUSTOM_INCREMENT",
			payload: val,
		});
	}

	render() {
		return (
			<Card>
				<Card.Header>
					Counter with <strong>Class Component</strong>
				</Card.Header>
				<Card.Body className="text-center">
					<Card.Title>{this.props.localCounter}</Card.Title>
					<Col className="my-4">
						<Button
							onClick={() => this.decrement()}
							variant="outline-primary"
							className="m-2"
						>
							(-) Decrement
						</Button>
						<Button
							onClick={() => this.increment()}
							variant="primary"
							className="m-2"
						>
							(+) Increment
						</Button>
					</Col>
					<Button
						onClick={() => this.customIncrement(5)}
						variant="danger"
					>
						(+5) Custom Increment
					</Button>
				</Card.Body>
			</Card>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		localCounter: state.counter,
	};
};

export default connect(mapStateToProps)(ClassComponent);
