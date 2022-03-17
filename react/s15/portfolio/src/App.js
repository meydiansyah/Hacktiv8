import { Navbars, Sidebar } from "@components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, About, Experience, Skills, Education } from "@view";
import { useState } from "react";
import LoadingBar from "react-top-loading-bar";

const App = () => {
	const [progress, updateProgress] = useState(0);
	return (
		<Router>
			<LoadingBar
				color="#10a970"
				progress={progress}
				onLoaderFinished={() => updateProgress(0)}
			/>
			<Navbars />
			<div className="d-flex">
				<div className="md-sidebar vh-100 pr-6 sidebar">
					<Sidebar />
				</div>
				<div className="w-100">
					<Routes>
						<Route
							path="/"
							element={<Home setProgress={updateProgress} />}
						/>
						<Route
							path="/about"
							element={<About setProgress={updateProgress} />}
						/>
						<Route
							path="/education"
							element={<Education setProgress={updateProgress} />}
						/>
						<Route
							path="/experience"
							element={
								<Experience setProgress={updateProgress} />
							}
						/>
						<Route
							path="/skills"
							element={<Skills setProgress={updateProgress} />}
						/>
					</Routes>
				</div>
			</div>
		</Router>
	);
};

export default App;
