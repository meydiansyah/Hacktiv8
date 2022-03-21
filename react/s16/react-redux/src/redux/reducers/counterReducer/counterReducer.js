import { INCREMENT, DECREMENT, CUSTOM_INCREMENT } from "./../../constants";

const counterReducer = (state = 0, action) => {
	switch (action.type) {
		case INCREMENT:
			return (state += 1);
		case CUSTOM_INCREMENT:
			return (state += action.payload);
		case DECREMENT:
			return (state -= 1);
		default:
			return state;
	}
};

export default counterReducer;
