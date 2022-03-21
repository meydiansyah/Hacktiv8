import { useState } from "react";
import { Container, Tabs, Tab } from "react-bootstrap";
import { Counter, Users } from "./views";

function App() {
	const [key, setKey] = useState("counter");
	return (
		<Container>
			<Tabs
				id="controlled-tab-example"
				activeKey={key}
				onSelect={(k) => setKey(k)}
				className="my-4"
			>
				<Tab title="Bindev.bit" disabled />
				<Tab eventKey="counter" title="Counter">
					<Counter />
				</Tab>
				<Tab eventKey="users" title="Users">
					<Users />
				</Tab>
			</Tabs>
		</Container>
	);
}

export default App;
