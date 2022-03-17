import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const Register = () => {
	const navigate = useNavigate();
	useEffect(() => {
		if (localStorage.getItem("login")) {
			navigate("/");
		}
	});

	return <h2>Register page</h2>;
};

export default Register;
