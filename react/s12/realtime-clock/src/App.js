import logo from "./logo.svg";
import React, { useState } from "react";
import "./App.css";

// Class component
class RealtimeClockClass extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			date: new Date(),
		};
	}

	tick() {
		this.setState({
			date: new Date(),
		});
	}

	componentDidMount() {
		this.timerId = setInterval(() => this.tick(), 1000);
	}

	componentWillUnmount() {
		clearInterval(this.timerId);
	}

	render() {
		return <h3>{this.state.date.toLocaleTimeString()}</h3>;
	}
}

// Function component
function RealtimeClockFunction() {
	const [date, setDate] = useState(new Date());

	function tick() {
		setDate(new Date());
	}
	setInterval(() => tick(), 1000);
	return <h3>{date.toLocaleTimeString()}</h3>;
}

class App extends React.Component {
	render() {
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h2>Realtime CLOCK</h2>
					<hr />
					<RealtimeClockFunction />
				</header>
			</div>
		);
	}
}

export default App;
