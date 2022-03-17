import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Jumbotron } from "@components";
import { useEffect } from "react";

import { Component } from "react";

export default class Home extends Component {
	constructor(props) {
		super(props);

		this.state = {};
	}

	componentDidMount() {
		this.props.setProgress(100);
	}

	render() {
		return (
			<Container className="mt-4" style={{ minHeight: "100vh" }}>
				<Jumbotron>
					<Container className="py-2">
						<Jumbotron>
							<h1 className="display-4 text-bold">
								First paragraph in Jumbotron{" "}
							</h1>
							<p className="lead">
								Using a series of utilites, you can create this
								jumbotron, just like the one in previous version
								of Bootstrap. Check out the examples below for
								how you can remix and restyle it to your liking.
							</p>
							<hr className="my-4" />
							<Link to="/todo" className="btn btn-primary btn-lg">
								Todo button
							</Link>
						</Jumbotron>
					</Container>
				</Jumbotron>
			</Container>
		);
	}
}
