import { useLocation } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import { motion } from "framer-motion";

const Sidebar = () => {
	const { pathname } = useLocation();
	return (
		<Navbar className="h-100">
			<motion.div
				initial={{
					x: -150,
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
				<Nav
					activeKey={pathname}
					className="p-4 d-flex flex-column justify-content-center"
				>
					<Nav.Link href="/">Home</Nav.Link>
					<Nav.Link href="/about">About</Nav.Link>
					<Nav.Link href="/education">Education</Nav.Link>
					<Nav.Link href="/experience">Experience</Nav.Link>
					<Nav.Link href="/skills">Skills</Nav.Link>
				</Nav>
			</motion.div>
		</Navbar>
	);
};

export default Sidebar;
