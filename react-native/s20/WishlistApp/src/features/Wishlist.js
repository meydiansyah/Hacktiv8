import { FlatList, Text, Heading, Box } from "native-base";
import { useSelector, useDispatch } from "react-redux";
import { listWishlist, inputToggle } from "./wishlistSlice";
import InputWishlist from "./InputWishlist";
import { Pressable } from "react-native";
import ListItem from "./ListItem";

const Wishlist = () => {
	const list = useSelector(listWishlist);
	const dispatch = useDispatch();

	return (
		<Pressable onPress={() => dispatch(inputToggle())}>
			<Box h="100%" w="100%">
				<Heading size="md" px={10} py={5}>
					Wishlist
				</Heading>
				{!list.data.length ? (
					<Text>Empty</Text>
				) : (
					<FlatList
						px={10}
						data={list.data}
						renderItem={({ item, index }) => {
							return (
								<>
									<ListItem item={item} index={index} />
									{list.showInput && <InputWishlist />}
								</>
							);
						}}
						keyExtractor={(_item, index) => index.toString()}
					/>
				)}
			</Box>
		</Pressable>
	);
};

export default Wishlist;
