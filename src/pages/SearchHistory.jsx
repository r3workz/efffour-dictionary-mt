import { useSelector } from "react-redux"

import { Link } from "react-router-dom"
import Tooltip from "@mui/material/Tooltip"
import HighlightOffIcon from "@mui/icons-material/HighlightOff"
import ClearAllIcon from "@mui/icons-material/ClearAll"
import { useDispatch } from "react-redux"
import { removeHistory, clearHistory } from "../redux/actions/historyActions"
const SearchHistory = () => {
	const history = useSelector(state => state)
	const dispatch = useDispatch()

	return (
		<>
			<div className="searchHistory">
				<div
					style={{ display: "flex", justifyContent: "space-between" }}
				>
					<h2>Search History</h2>
					{history.length > 0 && (
						<ClearAllIcon
							className="icon-btn"
							onClick={() => {
								if (
									window.confirm(
										`Are you sure you wish to clear all Searched words from History?`
									)
								) {
									dispatch(clearHistory())
								}
							}}
						/>
					)}
				</div>
				<ul>
					{history.map((item, index) => {
						return (
							<li
								style={{
									display: "flex",
									justifyContent: "space-between",
									alignItems: "center",
								}}
								className="historyItem"
								key={index}
							>
								{" "}
								<div>
									--
									<Link
										style={{
											backgroundColor: "transparent",
										}}
										to={`/word/${item}`}
										key={index}
									>
										{item}
									</Link>
								</div>
								<Tooltip title="Remove">
									<HighlightOffIcon
										className="icon-btn"
										onClick={() => {
											if (
												window.confirm(
													`Are you sure you wish to remove ${item} from Search History?`
												)
											) {
												dispatch(removeHistory(item))
											}
										}}
									/>
								</Tooltip>
							</li>
						)
					})}
				</ul>
			</div>
		</>
	)
}

export default SearchHistory
