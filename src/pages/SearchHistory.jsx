import { useSelector } from "react-redux"

import { Link } from "react-router-dom"
const SearchHistory = () => {
	const history = useSelector(state => state)

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
							<li className="historyItem" key={index}>
								<Link
									style={{ backgroundColor: "transparent" }}
									to={`/word/${item}`}
									key={index}
								>
									{item}
								</Link>
							</li>
						)
					})}
				</ul>
			</div>
		</>
	)
}

export default SearchHistory
