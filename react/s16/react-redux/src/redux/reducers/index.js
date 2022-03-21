import counterReducer from "./counterReducer/counterReducer";
import getUserReducer from "./getUserReducer/getUserReducer";
import { combineReducers } from "redux";

const reducers = combineReducers({
	counter: counterReducer,
	getUser: getUserReducer,
});

export default reducers;
