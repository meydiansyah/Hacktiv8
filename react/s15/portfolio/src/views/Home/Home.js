import { Component } from "react";
import { Container } from "react-bootstrap";
import { ListIconVertical, ListIconHorizontal } from "@components";
import { motion } from "framer-motion";

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
			<motion.div
				initial={{
					opacity: 0,
				}}
				animate={{
					opacity: 1,
				}}
				transition={{
					delay: 0.4,
					duration: 0.8,
				}}
				className="h-100 d-flex flex-column sm-center justify-content-center"
			>
				<Container className="py-4">
					<h5 className="text-muted">Hello, I'm</h5>
					<h2 className="le-1 big-head head-shadow font-weight-bold">
						Riski Meydiansyah
					</h2>
					<p>Full Stack Developer</p>
					<div className="px-4 border btn rounded-pill btn-green">
						Let's Connect
					</div>
					<ListIconHorizontal />
					<ListIconVertical />
				</Container>
			</motion.div>
		);
	}
}
