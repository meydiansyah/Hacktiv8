import { Component } from "react";
import { HiOutlineDownload } from "react-icons/hi";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";

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
			<motion.div
				initial={{
					x: 950,
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
				className="h-100 py-4 detail-about ml-4 text-end d-flex flex-column justify-content-center"
			>
				<p className="mb-5">
					I am a student at
					<span className="bg-green px-2 font-weight-bold mx-2">
						Esa Unggul University,
					</span>
					Faculty of Computer Science, Informatics Engineering '19.
				</p>
				<p>
					I have been active in the Esa Unggul University chapter of
					the
					<span className="bg-blue px-2 font-weight-bold mx-2">
						Google Developer Student Clubs
					</span>
					as
					<Typewriter
						options={{
							autoStart: true,
							loop: true,
						}}
						onInit={(typewriter) => {
							typewriter
								.typeString("<strong>Core Team</strong> 2021.")
								.pauseFor(2500)
								.deleteAll()
								.typeString("<strong>Lead</strong> 2022.")
								.pauseFor(2500)
								.start();
						}}
					/>
				</p>
				<div className="d-block">
					<a
						href="../../assets/CV_Portfolio_Riski Meydiansyah.pdf"
						className="px-4 border btn rounded-pill btn-instagram"
						download
					>
						<HiOutlineDownload className="mr-2" />
						Resume
					</a>
				</div>
			</motion.div>
		);
	}
}
