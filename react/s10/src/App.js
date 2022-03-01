import React from "react";
import PropTypes from "prop-types";
import "./App.css";
import logo from "./logo.svg";

class HeroName extends React.Component {
	render() {
		return <h3>{this.props.name}</h3>;
	}

	static propTypes = {
		name: PropTypes.string,
	};
}

class Hero extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			name: "Bin",
		};
	}
	render() {
		return <HeroName name={this.state.name} />;
	}
}

class Header extends React.Component {
	render() {
		return (
			<header className="header">
				<h1>My First React App</h1>
			</header>
		);
	}
}

class Content extends React.Component {
	render() {
		return (
			<div className="content">
				<p>Silahkan isi dengan paragraf</p>
			</div>
		);
	}
}

class Footer extends React.Component {
	render() {
		return (
			<div className="footer">
				<p>&copy; Riski Meydiansyah - 2022</p>
			</div>
		);
	}
}

class App extends React.Component {
	render() {
		return (
			<div className="container">
				<img src={logo} className="App-logo h-auto" alt="logo" />
				<Header />
				<hr />
				<Content />
				<hr />
				<Footer />
				<hr />
				<Hero />
			</div>
		);
	}
}
export default App;
