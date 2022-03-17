import { Component } from "react";
import { Container } from "react-bootstrap";

export default class About extends Component {
	constructor(props) {
		super(props);

		this.state = {};
	}

	componentDidMount() {
		this.props.setProgress(100);
	}

	render() {
		return (
			<Container>
				<div className="row p-4 m-auto justify-content-center">
					<div className="col col-md-6">
						<h2>Starter projects</h2>
						<p>
							Ready to beyond the starter template? Check out
							these open source projects taht you can quickly
							duplicate to a new Github repository.
						</p>
					</div>
					<div className="col col-md-6">
						<h2>Guides</h2>
						<p>
							Read more detailed instructions and documentation on
							using or contributing to Bootstrap.
						</p>
					</div>
				</div>
			</Container>
		);
	}
}
