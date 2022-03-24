import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	backlog: ["Create Template", "Create Mockup", "Adjust the web header"],
	inProgress: ["Initiate Docker for the project"],
	evaluation: ["Finalize the T.O.R"],
	done: [
		"Recruit Ruby developers",
		"Recruit FE developers",
		"Recruit Project Manager",
	],
	data: [
		{
			title: "new array object",
		},
	],
	tmpTitle: "",
};

export const sprintSlice = createSlice({
	name: "sprint",
	initialState,
	reducers: {
		addBacklog: (state, action) => {
			state.backlog.push(action.payload);
			state.tmpTitle = action.payload;
		},
		addInProgress: (state, action) => {
			state.inProgress.push(action.payload);
			state.backlog.splice(action.payload, 1);
		},
		addEvaluation: (state, action) => {
			state.evaluation.push(action.payload);
			state.inProgress.splice(action.payload, 1);
		},
		addDone: (state, action) => {
			state.done.push(action.payload);
			state.evaluation.splice(action.payload, 1);
		},
	},
});

export const { addBacklog, addInProgress, addEvaluation, addDone } =
	sprintSlice.actions;

export const listSprint = (state) => state.sprint;

export default sprintSlice.reducer;
