import React from "react"
import { Routes, Route } from "react-router-dom"
import SearchWords from "./pages/SearchWords"
import SearchHistory from "./pages/SearchHistory"
import WordMeaning from "./pages/WordMeaning"
import { BrowserRouter } from "react-router-dom"
import NavBar from "./components/NavBar"
import "./styles/App.css"

function App() {
	return (
		<BrowserRouter basename="/efffour-dictionary-mt">
			<NavBar />
			<Routes>
				<Route exact path="/" element={<SearchWords />} />
				<Route path="/history" element={<SearchHistory />} />
				<Route path="/word/:word" element={<WordMeaning />} />
			</Routes>
		</BrowserRouter>
	)
}

export default App
