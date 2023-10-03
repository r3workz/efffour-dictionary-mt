import { ADD_HISTORY, REMOVE_HISTORY, CLEAR_HISTORY } from "./actionTypes"

export const addHistory = word => ({
	type: ADD_HISTORY,
	payload: word,
})

export const removeHistory = word => ({
	type: REMOVE_HISTORY,
	payload: word,
})

export const clearHistory = () => ({
	type: CLEAR_HISTORY,
})
