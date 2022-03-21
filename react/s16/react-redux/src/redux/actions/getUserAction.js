import { GET_USER } from "../constants";

export const fetchUser = () => {
	return async (dispatch) => {
		const res = await fetch("https://jsonplaceholder.typicode.com/users");
		const data = await res.json();

		dispatch({
			type: GET_USER,
			payload: data,
		});
	};
};
