import { HANDLE_CLICK, JUMP_TO } from "./actions.js";
import calculateWinner from "./helpers/calculateWinner.js";

const initialState = {
	history: [
		{
			squares: Array(9).fill(null)
		}
	],
	stepNumber: 0,
	xIsNext: true
};

export default (state = initialState, action) => {
	switch (action.type) {
		case HANDLE_CLICK:
			const { squareIndex } = action;
			const history = state.history.slice(0, state.stepNumber + 1);
			const current = history[history.length - 1];
			const squares = current.squares.slice();
			if (calculateWinner(squares) || squares[squareIndex]) {
				return state;
			}
			squares[squareIndex] = state.xIsNext ? "X" : "O";
			return {
				...state,
				history: history.concat([{ squares }]),
				stepNumber: history.length,
				xIsNext: !state.xIsNext
			};

		case JUMP_TO:
			const { stepIndex } = action;
			return {
				...state,
				stepNumber: stepIndex,
				xIsNext: stepIndex % 2 === 0
			};

		default:
			return state;
	}
};
