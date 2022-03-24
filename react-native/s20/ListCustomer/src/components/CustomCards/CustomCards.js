import {
	Avatar,
	Box,
	Stack,
	Icon,
	HStack,
	Text,
	VStack,
	Spacer,
} from "native-base";
import { Ionicons } from "@expo/vector-icons";

const HeaderCard = (props) => {
	return (
		<VStack>
			<Text fontSize="md" bold>
				{props.data.name.title +
					" " +
					props.data.name.first +
					" " +
					props.data.name.last}
			</Text>
			<Text color="emerald.700">{props.data.email}</Text>
			<HStack space={1} alignItems="center">
				<Icon size="3" as={Ionicons} name="call" />
				<Text>{props.data.phone}</Text>
			</HStack>
		</VStack>
	);
};

const CustomCards = (props) => {
	function address() {
		let location = props.data.location;
		return (
			location.street.name +
			", " +
			location.city +
			", " +
			location.state +
			", " +
			location.country
		);
	}

	return (
		<Box
			m={4}
			p={3}
			background="coolGray.100"
			overflow="hidden"
			rounded="md"
		>
			<HStack space={3}>
				<Avatar source={{ uri: props.data.picture.medium }} />
				<Stack w="65%" space={2}>
					<HeaderCard data={props.data} />
					<Text fontSize="sm">{address()}</Text>
				</Stack>
				<Spacer />
				<Stack>
					<Icon
						as={Ionicons}
						name={props.data.gender == "male" ? "male" : "female"}
						color={
							props.data.gender == "male"
								? "coolGray.800"
								: "pink.700"
						}
						size="5"
					/>
				</Stack>
			</HStack>
		</Box>
	);
};

export default CustomCards;
