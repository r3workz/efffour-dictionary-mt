import axios from "axios"
import { useState, useContext } from "react"
import { useDispatch } from "react-redux"

import { CircularProgress } from "@mui/material"

import ShowDef from "../components/ShowDef"
import LoaderContext from "../context/LoaderContext"
import { addHistory } from "../redux/actions/historyActions"
const SearchWords = () => {
	const [inputValue, setInputValue] = useState("")
	const [searchdata, setSearchData] = useState([])

	const { loading, setLoading } = useContext(LoaderContext)

	const dispatch = useDispatch()

	const search = () => {
		setLoading({ isLoading: true })
		if (inputValue.trim() === "") {
			//Clearing data
			alert("Please enter a word")
			setInputValue("")
			setSearchData([])
			setLoading(false)
			return
		}
		axios
			.get(
				`https://api.dictionaryapi.dev/api/v2/entries/en/${inputValue}`
			)
			.then(res => {
				setSearchData(res.data)
				dispatch(addHistory(res.data[0].word))
				setInputValue("")
			})
			.catch(err => {
				console.error(err)
				alert(
					err.response.data.message +
						"\n" +
						err.response.data.resolution
				)
			})
			.finally(() => {
				setLoading(false)
			})
	}

	return (
		<>
			<div className="search">
				<input
					type="search"
					className="searchInput"
					value={inputValue}
					placeholder="Search Words"
					onChange={e => setInputValue(e.target.value)}
					onKeyDown={e => {
						if (e.key === "Enter") {
							search()
						}
					}}
				/>
				<button className="searchButton" onClick={search}>
					Search
				</button>
			</div>

			{loading ? (
				<div
					style={{
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						width: "100%",
						height: "100%",
						position: "absolute",
						top: 0,
					}}
				>
					<CircularProgress color="inherit" thickness={5} size={50} />
				</div>
			) : searchdata.length > 0 ? (
				searchdata.map((item, index) => (
					<ShowDef key={index} wordData={item} />
				))
			) : (
				<h3
					style={{
						display: "flex",
						justifyContent: "center",
						flexDirection: "column",
						alignItems: "center",
						height: "70vh",
						textAlign: "center",
					}}
				>
					Enter a word/s in the search bar to look for its meanings,
					pronunciations, synonyms and antonyms, etc.
				</h3>
			)}
		</>
	)
}

export default SearchWords
