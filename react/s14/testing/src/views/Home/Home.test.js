import { render, screen, fireEvent } from "@testing-library/react";
import { createMemoryHistory } from "history";
import { BrowserRouter as Router } from "react-router-dom";

import Home from "./Home";

test("Test view home component", () => {
	const history = createMemoryHistory();
	render(
		<Router history={history}>
			<Home />
		</Router>
	);
	expect(screen.getByText(/Why do we need Test ?/i)).toBeInTheDocument();
	// periksa button
	const btn = screen.getByRole("link");
	expect(btn).toBeInTheDocument();
	expect(btn).toHaveTextContent("Users");
});
