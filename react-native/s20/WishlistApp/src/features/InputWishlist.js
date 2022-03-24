import { HStack, Input } from "native-base";
import { useDispatch, useSelector } from "react-redux";
import { listWishlist, onChangeTemp, inputToggle } from "./wishlistSlice";

const InputWishlist = () => {
	const state = useSelector(listWishlist);
	const dispatch = useDispatch();

	return (
		<HStack space={2} px={10} py={3}>
			<Input
				flex={1}
				px={4}
				onChangeText={(v) => dispatch(onChangeTemp(v))}
				value={state.temp}
				placeholder="Add Task"
				autoFocus={true}
				borderRadius="xl"
				onSubmitEditing={() => dispatch(inputToggle())}
			/>
		</HStack>
	);
};

export default InputWishlist;
