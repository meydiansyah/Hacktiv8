import { useState, useEffect } from "react";
import CustomCards from "../../components/CustomCards/CustomCards";
import { Box, HStack, Spinner, Heading, FlatList } from "native-base";

const Customers = () => {
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
		<Box>
			{isLoading ? (
				<HStack space={2} justifyContent="center">
					<Spinner
						color="emerald.500"
						accessibilityLabel="Loading posts"
					/>
					<Heading color="emerald.500" fontSize="md">
						Loading
					</Heading>
				</HStack>
			) : (
				<FlatList
					data={data.results}
					renderItem={({ item }) => <CustomCards data={item} />}
					keyExtractor={(_item, index) => index.toString()}
				/>
			)}
		</Box>
	);
};

export default Customers;
