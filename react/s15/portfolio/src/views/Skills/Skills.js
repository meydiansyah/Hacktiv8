import { Component } from "react";
import { motion } from "framer-motion";
import {
	FaFigma,
	FaLaravel,
	FaVuejs,
	FaAngular,
	FaDocker,
	FaReact,
} from "react-icons/fa";
import { SiAdobexd, SiMysql, SiNeovim, SiFlutter } from "react-icons/si";
import "./Skills.css";

export default class Skills extends Component {
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
					<h5 className="text-muted m-0">What can i do</h5>
					<h2 className="le-1 head-shadow font-weight-bold">
						My Skills
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
					className="min-vh-100 skill-detail pt-0"
				>
					<div className="d-block mb-5">
						<h2 className="font-bold m-0">UI/UX Designer</h2>
						<div className="d-flex list-icons">
							<div className=" skill-icons">
								<FaFigma />
							</div>
							<div className="skill-icons">
								<SiAdobexd />
							</div>
						</div>
					</div>
					<div className="d-block mb-5">
						<h2 className="font-bold m-0">Full Stack Developer</h2>
						<div className="d-flex list-icons">
							<div className="skill-icons">
								<FaLaravel />
							</div>
							<div className=" skill-icons">
								<FaVuejs />
							</div>
							<div className=" skill-icons">
								<FaAngular />
							</div>
							<div className=" skill-icons">
								<FaReact />
							</div>
							<div className=" skill-icons">
								<SiMysql />
							</div>
							<div className=" skill-icons">
								<FaDocker />
							</div>
							<div className=" skill-icons">
								<SiNeovim />
							</div>
						</div>
					</div>
					<div className="d-block">
						<h2 className="font-bold m-0">Mobile Developer</h2>
						<div className="d-flex list-icons">
							<div className=" skill-icons">
								<SiFlutter />
							</div>
							<div className="skill-icons">
								<FaReact />
							</div>
						</div>
					</div>
				</motion.div>
			</div>
		);
	}
}
