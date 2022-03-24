import { Box, StatusBar, NativeBaseProvider } from "native-base";
import { Provider } from "react-redux";
import { store } from "./src/store";
import Wishlist from "./src/features/Wishlist";

export default function App() {
	return (
		<NativeBaseProvider>
			<Provider store={store}>
				<StatusBar backgroundColor="#1f2937" barStyle="light-content" />

				<Box flex={1}>
					<Wishlist />
				</Box>
			</Provider>
		</NativeBaseProvider>
	);
}
