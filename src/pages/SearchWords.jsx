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
		axios
			.get(
				`https://api.dictionaryapi.dev/api/v2/entries/en/${inputValue}`
			)
			.then(res => {
				setSearchData(res.data)
				dispatch(addHistory(res.data[0].word))
			})
			.catch(err => {
				console.log(err)
			})
			.finally(() => {
				setLoading(false)
			})
	}

	return (
		<>
			<div className="search">
				<input
					type="text"
					className="searchInput"
					value={inputValue}
					placeholder="Search Words"
					onChange={e => setInputValue(e.target.value)}
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
					<CircularProgress
						color="inherit"
						thickness={5}
						size={100}
					/>
				</div>
			) : (
				searchdata.length > 0 &&
				searchdata.map((item, index) => (
					<ShowDef key={index} wordData={item} />
				))
			)}
		</>
	)
}

export default SearchWords
