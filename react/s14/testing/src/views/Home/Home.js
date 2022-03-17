import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import styled from "styled-components";

const Jumbotron = styled.section`
	padding: 2rem 1rem;
	margin-bottom: 2rem;
	background-color: #e9ecef;
	border-radius: 0.3rem;
`;

const Home = () => {
	return (
		<>
			<Container className="py-4">
				<Jumbotron>
					<h1 className="display-4 text-bold">
						Why do we need Test ?
					</h1>
					<p className="lead">
						To Quarantee our code quality. And to show the people
						that we also care about it and wish to give something
						already proven, at least by ourself
					</p>
					<hr className="my-4" />
					<Link to="/users" className="btn btn-primary btn-lg">
						Users
					</Link>
				</Jumbotron>
			</Container>
		</>
	);
};

export default Home;
