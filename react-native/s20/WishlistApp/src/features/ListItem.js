import { HStack, IconButton, Icon, Text } from "native-base";
import { useDispatch } from "react-redux";
import { Ionicons } from "@expo/vector-icons";
import { completeWishlist, removeWishlist } from "./wishlistSlice";
const ListItem = (props) => {
	const dispatch = useDispatch();
	return (
		<HStack
			w="100%"
			justifyContent="space-between"
			alignItems="center"
			key={props.item.id}
		>
			<HStack alignItems="center">
				<IconButton
					size="md"
					icon={
						<Icon
							as={Ionicons}
							name={
								props.item.isCompleted
									? "radio-button-on"
									: "radio-button-off"
							}
							size="sm"
							color={
								props.item.isCompleted
									? "amber.400"
									: "trueGray.400"
							}
						/>
					}
					borderRadius="full"
					onPress={() => dispatch(completeWishlist(props.item.id))}
				/>

				<Text
					mx="2"
					strikeThrough={props.item.isCompleted}
					_light={{
						color: props.item.isCompleted
							? "gray.400"
							: "coolGray.800",
					}}
					_dark={{
						color: props.item.isCompleted
							? "gray.400"
							: "coolGray.50",
					}}
				>
					{props.item.title}
				</Text>
			</HStack>
			<IconButton
				size="sm"
				colorScheme="trueGray"
				icon={
					<Icon
						as={Ionicons}
						name="trash"
						size="xs"
						color="trueGray.400"
					/>
				}
				onPress={() => dispatch(removeWishlist(props.index))}
			/>
		</HStack>
	);
};

export default ListItem;
