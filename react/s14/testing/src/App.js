import { Component } from "react";
import {Routes, Route } from "react-router-dom";
import { Home, Users } from "@view";
import { Navbars } from "@components";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default class App extends Component {
	render() {
		return (
			<>
					<Navbars />

					<Container>
						<Routes>
							<Route path="/" element={<Home />} />
							<Route path="/users" element={<Users />} />
						</Routes>
					</Container>
			</>
		);
	}
}
