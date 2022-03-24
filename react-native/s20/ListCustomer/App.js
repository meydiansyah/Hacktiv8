import { NativeBaseProvider, Box } from "native-base";
import { CustomAppBar } from "./src/components";
import { Customers } from "./src/screens";

export default function App() {
	return (
		<NativeBaseProvider>
			<Box background="coolGray.800" flex={1}>
				<CustomAppBar />
				<Customers />
			</Box>
		</NativeBaseProvider>
	);
}
