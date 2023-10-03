import {
	ADD_HISTORY,
	REMOVE_HISTORY,
	CLEAR_HISTORY,
} from "../actions/actionTypes"

// let history = []

// const HistoryReducer = (state = history, action) => {
// 	switch (action.type) {
// 		case ADD_HISTORY:
// 			return [...state, action.payload]
// 		case CLEAR_HISTORY:
// 			return []
// 		default:
// 			return state
// 	}
// }
let history = []

export const HistoryReducer = (state = history, action) => {
	switch (action.type) {
		case ADD_HISTORY: {
			if (!state.find(item => item === action.payload)) {
				return [...state, action.payload]
			}
			return [...state]
		}
		case REMOVE_HISTORY:
			return state.filter(item => item !== action.payload)
		case CLEAR_HISTORY:
			return []
		default:
			return state
	}
}

export default HistoryReducer
