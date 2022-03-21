import { INCREMENT, DECREMENT, CUSTOM_INCREMENT } from "./../constants";

export const increment = () => {
	return {
		type: INCREMENT,
	};
};

export const decrement = () => {
	return {
		type: DECREMENT,
	};
};

export const customIncrement = (val) => {
	return {
		type: CUSTOM_INCREMENT,
		payload: val,
	};
};
