import { Component } from "react";
import { motion } from "framer-motion";
import "./Education.css";

export default class Education extends Component {
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
						x: 250,
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
					<h5 className="text-muted m-0">My last</h5>
					<h2 className="le-1 head-shadow font-weight-bold">
						Education
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
					className="min-vh-100 edu-detail"
				>
					<div className="d-block mb-5">
						<h2 className="font-bold m-0">
							Universitas Esa Unggul (
							<span className="text-muted">Computer Science</span>
							)
						</h2>
						<p className="text-muted m-0">2019 - Present</p>
						<p className="mb-5 h5">
							Jl. Arjuna Utara No.9, Kb. Jeruk, Kec. Kb. Jeruk,
							Kota Jakarta Barat, Daerah Khusus Ibukota Jakarta
						</p>
					</div>
					<div className="d-block">
						<h2 className="font-bold m-0">
							SMAN Tugumulyo (
							<span className="text-muted">Science</span>)
						</h2>
						<p className="text-muted m-0">2016 - 2019</p>
						<p className="mb-5 h5">
							Mataram, Tugu Mulyo, Kabupaten Musi Rawas, Sumatera
							Selatan
						</p>
					</div>
				</motion.div>
			</div>
		);
	}
}
