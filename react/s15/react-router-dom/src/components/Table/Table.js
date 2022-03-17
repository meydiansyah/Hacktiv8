import React  from "react";
import { FaRegCheckSquare, FaRegSquare } from "react-icons/fa";
import { Table } from "react-bootstrap";

const TodoTable = props => {
	return (
<Table striped bordered hover size="sm">
				<thead>
					<tr>
						<th>Id</th>
						<th>Title</th>
						<th className="text-center">Status</th>
					</tr>
				</thead>
				<tbody>
					{props.todo.map((data, i) => (
						<tr key={data.id}>
							<td>{data.id}</td>
							<td>{data.title}</td>
							<td className="text-center">
								{data.status ? (
									<FaRegCheckSquare />
								) : (
									<FaRegSquare />
								)}
							</td>
						</tr>
					))}
				</tbody>
			</Table>
	)
}

export default TodoTable;
