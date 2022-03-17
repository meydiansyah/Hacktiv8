import { Navbar, Container, Nav, Button } from "react-bootstrap";

const Navbars = () => {
	return (
		<>
			<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
				<Container>
					<Navbar.Brand href="#home">Bindev</Navbar.Brand>
					<Navbar.Toggle aria-controls="responsive-navbar-nav" />
					<Navbar.Collapse id="responsive-navbar-nav">
						<Nav className="me-auto">
							<Nav.Link href="/">Home</Nav.Link>
							<Nav.Link href="/about">About</Nav.Link>
							<Nav.Link href="/contact">Contact</Nav.Link>
							<Nav.Link href="/todo">Todo</Nav.Link>
						</Nav>
						<Nav>
							<Nav.Link href="/register">Register</Nav.Link>
							<Button variant="primary">Login</Button>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</>
	);
};

export default Navbars;
