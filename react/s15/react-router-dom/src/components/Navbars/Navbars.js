import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";

const Navbars = () => {
	const { pathname } = useLocation();
	let navigate = useNavigate();
	var isLogin = localStorage.getItem("login");

	return (
		<>
			<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
				<Container>
					<Navbar.Brand href="#home">Bindev</Navbar.Brand>
					<Navbar.Toggle aria-controls="responsive-navbar-nav" />
					<Navbar.Collapse id="responsive-navbar-nav">
						<Nav activeKey={pathname} className="me-auto">
							<Nav.Link href="/">Home</Nav.Link>
							<Nav.Link href="/about">About</Nav.Link>
							<Nav.Link href="/contact">Contact</Nav.Link>
							<Nav.Link href="/todo">Todo</Nav.Link>
						</Nav>
						<Nav>
							{!isLogin ? (
								<>
									{pathname !== "/register" && (
										<Nav.Link href="/register">
											Register
										</Nav.Link>
									)}
									{pathname !== "/login" && (
										<Button
											onClick={() => {
												navigate("/login");
											}}
											variant="primary"
										>
											Login
										</Button>
									)}
								</>
							) : (
								<Button
									onClick={() => {
										localStorage.removeItem("login");
										navigate("/");
									}}
									variant="secondary"
								>
									Logout
								</Button>
							)}
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</>
	);
};

export default Navbars;
