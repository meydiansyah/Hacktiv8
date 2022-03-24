import { configureStore } from "@reduxjs/toolkit";
import sprintReducer from "../features/sprint/sprintSlice";

export const store = configureStore({
	reducer: {
		sprint: sprintReducer,
	},
});
