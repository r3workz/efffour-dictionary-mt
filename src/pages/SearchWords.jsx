import { useState } from "react"
import axios from "axios"
import { useDispatch } from "react-redux"
import { addHistory } from "../redux/actions/historyActions"
import ShowDef from "../components/ShowDef"
const SearchWords = () => {
	const [inputValue, setInputValue] = useState("bark")
	const [searchdata, setSearchData] = useState([])

	const dispatch = useDispatch()

	const search = () => {
		axios
			.get(
				`https://api.dictionaryapi.dev/api/v2/entries/en/${inputValue}`
			)
			.then(res => {
				// console.log(res.data)
				setSearchData(res.data)
				dispatch(addHistory(res.data[0].word))
				//
			})
			.catch(err => {
				console.log(err)
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
			{searchdata.length > 0 &&
				searchdata.map((item, index) => (
					<ShowDef key={index} wordData={item} />
				))}
		</>
	)
}

export default SearchWords
