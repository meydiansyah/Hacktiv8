import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, Button } from "react-native";

export default function App() {
	return (
		<View style={styles.container}>
			<Image
				style={styles.img}
				source={{
					uri: "https://www.shareicon.net/data/256x256/2016/07/08/117367_logo_512x512.png",
				}}
			/>
			<Text>Mari belajar RN</Text>
			<Button title="Click me" color="blue" />
			<StatusBar style="auto" />
		</View>
	);
}

const styles = StyleSheet.create({
	img: {
		height: 100,
		width: 100,
	},
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
