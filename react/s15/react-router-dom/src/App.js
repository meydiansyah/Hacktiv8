import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, About, Contact, Login, Register, Todo } from "@view";
import { Navbars, Footer } from "@components";
import { useState } from "react";
import LoadingBar from "react-top-loading-bar";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
	const [progress, updateProgress] = useState(0);

	return (
		<>
			<Router>
				<LoadingBar
					color="#0d6efd"
					progress={progress}
					onLoaderFinished={() => updateProgress(0)}
				/>
				<Navbars />
				<Routes>
					<Route
						path="/"
						element={<Home setProgress={updateProgress} />}
					/>
					<Route
						path="about"
						element={<About setProgress={updateProgress} />}
					/>
					<Route
						path="contact"
						element={<Contact setProgress={updateProgress} />}
					/>
					<Route
						path="todo"
						element={<Todo setProgress={updateProgress} />}
					/>
					<Route
						path="login"
						element={<Login setProgress={updateProgress} />}
					/>
					<Route
						path="register"
						element={<Register setProgress={updateProgress} />}
					/>
				</Routes>
			</Router>
			<Footer />
		</>
	);
};
export default App;
