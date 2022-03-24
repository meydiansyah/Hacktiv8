import { StatusBar, Box, Heading } from "native-base";
const CustomAppBar = () => {
	return (
		<>
			<StatusBar backgroundColor="#1f2937" barStyle="light-content" />
			<Box background="coolGray.800" px="5" py="3" w="100%">
				<Heading color="white">Customers</Heading>
			</Box>
		</>
	);
};

export default CustomAppBar;
