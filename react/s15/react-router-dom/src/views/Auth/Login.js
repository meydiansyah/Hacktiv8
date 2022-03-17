import { Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Login = () => {
	const navigate = useNavigate();

	useEffect(() => {
		if (localStorage.getItem("login")) {
			navigate("/");
		}
	});

	const doLogin = () => {
		localStorage.setItem("login", "true");
		navigate("/");
	};

	return (
		<Card className="m-5 shadow-md ">
			<Card.Body>
				<Card.Title>Login</Card.Title>
				<p className="mb-0">
					This is just simple login page simulation
				</p>
				<p>Just click the login button bellow to do the login</p>
				<Button onClick={doLogin} variant="primary">
					Login
				</Button>
			</Card.Body>
		</Card>
	);
};

export default Login;
