import { render, screen, waitFor } from "@testing-library/react";
import { createMemoryHistory } from "history";
import { BrowserRouter as Router } from "react-router-dom";

import Users from "./Users";

test("Test view user component", async () => {
	const history = createMemoryHistory();
	render(
		<Router history={history}>
			<Users />
		</Router>
	);
	expect(screen.getByText(/List Users/i)).toBeInTheDocument();

	const btn = await waitFor(
		() => {
			return screen.getByRole("link");
		},
		{ timeout: 5000 }
	);

	expect(btn).toBeInTheDocument();
	expect(btn).toHaveTextContent("Kembali");

	const user = await waitFor(
		() => {
			return screen.findByText("Leanne Graham");
		},
		{ timeout: 5000 }
	);

	expect(user).toBeInTheDocument();
});
