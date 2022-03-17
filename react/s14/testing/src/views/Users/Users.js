import { Table, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Component } from "react";
import "./Users.css";

export default class Users extends Component {
	constructor(props) {
		super(props);

		this.state = {
			users: [],
			loading: true,
		};
	}

	componentDidMount() {
		fetch("https://jsonplaceholder.typicode.com/users")
			.then((resp) => resp.json())
			.then((result) => {
				this.setState({
					users: result,
					loading: false,
				});
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
					<h1 className="display-4">List Users</h1>
				</div>

				<Table striped bordered hover size="sm">
					<thead>
						<tr>
							<th>#</th>
							<th>Name</th>
							<th>Username</th>
							<th>Email</th>
						</tr>
					</thead>
					<tbody>
						{this.state.users.map((data, i) => (
							<tr key={data.id}>
								<td>{i + 1}</td>
								<td>{data.name}</td>
								<td>{data.username}</td>
								<td>{data.email}</td>
							</tr>
						))}
					</tbody>
				</Table>
			</Container>
		);
	}
}
