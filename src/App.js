import React from "react"
import { Routes, Route } from "react-router-dom"
import SearchWords from "./pages/SearchWords"
import SearchHistory from "./pages/SearchHistory"
import { BrowserRouter } from "react-router-dom"
import NavBar from "./components/NavBar"
import "./styles/App.css"

function App() {
	return (
		<>
			<NavBar />
			<BrowserRouter basename="/efffour-dictionary-mt">
				<Routes>
					<Route
						exact
						path="/efffour-dictionary-mt"
						element={<SearchWords />}
					/>
					<Route path="/home" element={<SearchWords />} />
					<Route path="/history" element={<SearchHistory />} />
				</Routes>
			</BrowserRouter>
		</>
	)
}

export default App
