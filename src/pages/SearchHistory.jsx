import { useSelector } from "react-redux"
import axios from "axios"
import { useState } from "react"
import ShowDef from "../components/ShowDef"
const SearchHistory = () => {
	const history = useSelector(state => state)
	const [searchdata, setSearchData] = useState([])

	// On click of history item show the definition
	function handleClick(event) {
		const selectedWord = event.target.innerText

		axios
			.get(
				`https://api.dictionaryapi.dev/api/v2/entries/en/${selectedWord}`
			)
			.then(res => {
				console.log(res.data)
				setSearchData(res.data)
			})
			.catch(err => {
				console.log(err)
			})
	}
	return (
		<>
			<div
				style={{ padding: "2rem 5%", backgroundColor: "white" }}
				className="searchHistory"
			>
				<h2>Search History</h2>
				<ul>
					{history.map((item, index) => {
						return (
							<li
								className="historyItem"
								key={index}
								style={{
									cursor: "pointer",
									fontWeight: "bold",
								}}
								onClick={handleClick}
								value={item}
							>
								{item}
							</li>
						)
					})}
				</ul>
			</div>
			{searchdata.length > 0 &&
				searchdata.map((item, index) => (
					<ShowDef key={index} wordData={item} />
				))}
		</>
	)
}

export default SearchHistory
