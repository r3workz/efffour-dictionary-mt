import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import { Provider } from "react-redux"
import store from "./redux/store"
import "./styles/index.css"
import LoaderProvider from "./context/LoaderProvider"

ReactDOM.render(
	<React.StrictMode>
		<LoaderProvider>
			<Provider store={store}>
				<App />
			</Provider>
		</LoaderProvider>
	</React.StrictMode>,
	document.getElementById("root")
)
