import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { View, FlatList, Text } from "react-native";
import { Appbar } from "react-native-paper";
import { CardUser } from "./src/components";
import styles from "./src/styles";

export default function App() {
	const [data, setData] = useState();
	const [isLoading, setLoading] = useState(true);

	useEffect(() => {
		fetch("https://randomuser.me/api/?results=20")
			.then((resp) => resp.json())
			.then((json) => setData(json))
			.catch((error) => console.error(error))
			.finally(() => setLoading(false));
	}, []);

	return (
		<View style={styles.screen}>
			<StatusBar barStyle="dark-content" />
			<Appbar.Header style={styles.appBarStyle}>
				<Appbar.Content title="Customers" />
				<Appbar.Action icon="dots-vertical" onPress={() => {}} />
			</Appbar.Header>

			<View style={styles.container}>
				{isLoading ? (
					<Text>Loading...</Text>
				) : (
					<FlatList
						style={styles.flatListStyle}
						data={data.results}
						renderItem={({ item }) => <CardUser data={item} />}
						keyExtractor={(_item, index) => index.toString()}
					/>
				)}
			</View>
		</View>
	);
}
