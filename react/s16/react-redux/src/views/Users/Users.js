import { Container, Row, Col, Button, Table } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { fetchUser } from "./../../redux/actions/getUserAction";

const Users = () => {
	const state = useSelector((state) => state.getUser);
	const dispatch = useDispatch();
	return (
		<Container>
			<Row className="justify-content-between bg-primary-200 border border-primary p-2 align-items-center rounded my-4">
				<Col xs={8} sm={9} md={8}>
					<p className="text-muted m-0 overflow-auto">
						https://jsonplaceholder.typicode.com/users
					</p>
				</Col>
				<Col xs={4} sm={3} md={4} className="text-end">
					<Button onClick={() => dispatch(fetchUser())}>
						Get Users
					</Button>
				</Col>
			</Row>
			<Table striped bordered hover size="sm">
				<thead>
					<tr>
						<th>Name</th>
						<th>Username</th>
						<th>Email</th>
					</tr>
				</thead>
				<tbody>
					{state.map((data) => {
						return (
							<tr>
								<th>{data.name}</th>
								<th>{data.username}</th>
								<th>{data.email}</th>
							</tr>
						);
					})}
				</tbody>
			</Table>
		</Container>
	);
};

export default Users;
