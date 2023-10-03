import React from "react"
import { Routes, Route } from "react-router-dom"
import SearchWords from "./pages/SearchWords"
import SearchHistory from "./pages/SearchHistory"
import NavBar from "./components/NavBar"
import "./styles/App.css"

function App() {
	return (
		<>
			<NavBar />
			<Routes>
				<Route
					// exact
					// path="/efffour-dictionary-mt"
					path="/"
					element={<SearchWords />}
				/>
				<Route
					// exact
					// path="/efffour-dictionary-mt"
					path="/history"
					element={<SearchHistory />}
				/>
			</Routes>
		</>
	)
}

export default App
