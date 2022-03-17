import { Component } from "react";
import { motion } from "framer-motion";

export default class Experience extends Component {
	constructor(props) {
		super(props);

		this.state = {};
	}

	componentDidMount() {
		this.props.setProgress(100);
	}
	render() {
		return (
			<div className="">
				<motion.div
					className="edu-head"
					initial={{
						x: 350,
					}}
					animate={{
						x: 0,
					}}
					transition={{
						delay: 0.5,
						type: "spring",
						stiffness: 50,
						duration: 0.5,
					}}
				>
					<h5 className="text-muted m-0">Get to know</h5>
					<h2 className="le-1 head-shadow font-weight-bold">
						My Experience
					</h2>
				</motion.div>

				<motion.div
					initial={{
						x: 1050,
					}}
					animate={{
						x: 0,
					}}
					transition={{
						delay: 1,
						type: "spring",
						stiffness: 50,
						duration: 0.5,
					}}
					className="min-vh-100 pt-0 edu-detail"
				>
					<div className="d-block mb-5">
						<h2 className="font-bold m-0">
							Google Developer Student Clubs (
							<span className="text-muted">Lead</span>)
						</h2>
						<p className="text-muted m-0">2021 - Present</p>
					</div>
					<div className="d-block">
						<h2 className="font-bold m-0">
							Google Developer Student Clubs (
							<span className="text-muted">Core Team</span>)
						</h2>
						<p className="text-muted m-0">2020 - 2021</p>
					</div>
				</motion.div>
			</div>
		);
	}
}
