import { Container, Button } from "react-bootstrap";
import { Jumbotron, Modals } from "@components";
import { useState} from 'react'


const Home = () => {
	const [modalShow, setModalShow] = useState(false)

	return (
		<>
		<Container className="mt-4" style={{ minHeight: "100vh" }}>
			<Jumbotron>
					<Container className="py-2">
							<h1 className="display-4 text-bold">
								First paragraph in Jumbotron{" "}
							</h1>
							<p className="lead">
								Using a series of utilites, you can create this
								jumbotron, just like the one in previous version
								of Bootstrap. Check out the examples below for
								how you can remix and restyle it to your liking.
							</p>
							<hr className="my-4" />
							<Button onClick={() => setModalShow(true)} className="btn btn-primary btn-lg">
								Todo button
							</Button>
					</Container>
				</Jumbotron>
			</Container>
			<Modals show={modalShow} onHide={() => setModalShow(false)} />
		</>
	)
}

export default Home
