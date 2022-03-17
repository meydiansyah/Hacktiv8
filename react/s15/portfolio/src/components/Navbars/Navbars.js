import { Navbar, Container, Nav } from "react-bootstrap";
import { useLocation } from "react-router-dom";

const Navbars = () => {
	const { pathname } = useLocation();

	return (
		<>
			<Navbar
				collapseOnSelect
				className="md-navbar"
				expand="md"
				variant="dark"
			>
				<Container>
					<Navbar.Toggle aria-controls="responsive-navbar-nav" />
					<Navbar.Collapse id="responsive-navbar-nav">
						<Nav activeKey={pathname} className="m-auto">
							<Nav.Link href="/">Home</Nav.Link>
							<Nav.Link href="/about">About</Nav.Link>
							<Nav.Link href="/education">Education</Nav.Link>
							<Nav.Link href="/experience">Experience</Nav.Link>
							<Nav.Link href="/awards">Awards</Nav.Link>
							<Nav.Link href="/interest">Interest</Nav.Link>
							<Nav.Link href="/skills">Skills</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</>
	);
};

export default Navbars;
