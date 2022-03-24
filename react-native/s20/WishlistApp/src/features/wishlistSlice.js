import { createSlice } from "@reduxjs/toolkit";

let id = 0;

export const wishlistSlice = createSlice({
	name: "wishlist",
	initialState: {
		data: [],
		showInput: false,
		temp: "",
	},
	reducers: {
		addWishlist: (state, action) => {
			state.data.push({
				id: id++,
				title: action.payload,
				isCompleted: false,
			});
			state.temp = "";
			state.showInput = false;
		},
		completeWishlist: (state, action) => {
			const wishlist = state.data.find((ws) => ws.id === action.payload);
			if (wishlist) {
				wishlist.isCompleted = !wishlist.isCompleted;
			}
		},
		removeWishlist: (state, action) => {
			state.data.splice(action.payload, 1);
		},
		inputToggle: (state) => {
			if (state.temp !== "") {
				state.data.push({
					id: id++,
					title: state.temp,
					isCompleted: false,
				});
				state.temp = "";
			}
			state.showInput = !state.showInput;
		},
		onChangeTemp: (state, action) => {
			state.temp = action.payload;
		},
	},
});

export const {
	addWishlist,
	completeWishlist,
	removeWishlist,
	inputToggle,
	onChangeTemp,
} = wishlistSlice.actions;

export const listWishlist = (state) => state.wishlist;

export default wishlistSlice.reducer;
