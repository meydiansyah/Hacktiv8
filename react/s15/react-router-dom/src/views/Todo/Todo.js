import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Component } from "react";
// import { FaRegCheckSquare, FaRegSquare } from "react-icons/fa";
import { TodoTable } from "@components";
import "./Todo.css";

export default class Todo extends Component {
	constructor(props) {
		super(props);

		this.state = {
			todos: [],
			loading: true,
		};
	}

	componentDidMount() {
		this.props.setProgress(30);

		fetch("https://jsonplaceholder.typicode.com/todos")
			.then((resp) => resp.json())
			.then((result) => {
				this.setState({
					todos: result,
					loading: false,
				});
				this.props.setProgress(100);
			});
	}

	render() {
		return (
			<Container className="pt-4 px-12">
				<div className="d-flex py-2 align-items-center">
					<div className="mr-2">
						{this.state.loading ? (
							<button
								className="btn btn-success mr-4 btn-md"
								type="button"
								disabled
							>
								<span
									className="spinner-border mr-1 spinner-border-sm"
									role="status"
									aria-hidden="true"
								></span>
								Loading...
							</button>
						) : (
							<Link
								to="/"
								className="btn btn-success px-4 btn-md"
							>
								Kembali
							</Link>
						)}
					</div>
					<h1 className="display-4">List Todo</h1>
				</div>

				<div className="p-2 bg-primary-200 border border-primary rounded my-2 d-flex align-items-center">
					<div className="mr-1">
						<div className="btn pe-none btn-primary px-4 btn-md">
							GET
						</div>
					</div>
					<h6 className="m-0">
						https://jsonplaceholder.typicode.com/todos
					</h6>
				</div>

				<TodoTable todo={this.state.todos} />
			</Container>
		);
	}
}
