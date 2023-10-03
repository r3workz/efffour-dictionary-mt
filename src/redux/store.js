import historyReducer from "./reducers/historyReducer"
import { createStore } from "redux"

const store = createStore(
	historyReducer,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store
