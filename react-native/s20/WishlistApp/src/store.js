import { configureStore } from "@reduxjs/toolkit";
import wishlistSlice from "./features/wishlistSlice";

export const store = configureStore({
	reducer: {
		wishlist: wishlistSlice,
	},
});
