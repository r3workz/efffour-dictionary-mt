import { useParams, Link } from "react-router-dom"
import { useState, useEffect, useContext } from "react"
import axios from "axios"
import ShowDef from "../components/ShowDef"
import { CircularProgress } from "@mui/material"
import LoaderContext from "../context/LoaderContext"
import Tooltip from "@mui/material/Tooltip"
import ArrowBackIcon from "@mui/icons-material/ArrowBack"
const WordMeaning = () => {
	const { word } = useParams()

	const [searchdata, setSearchData] = useState([])

	const { loading, setLoading } = useContext(LoaderContext)
	// setLoading(true)

	useEffect(() => {
		setLoading(true)
		axios
			.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
			.then(res => {
				console.log(res.data)
				setSearchData(res.data)
			})
			.catch(err => {
				console.log(err)
			})
			.finally(() => {
				setLoading(false)
			})
	}, [word, setLoading])

	return (
		<>
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
				<>
					<Link className="back-button" to={`/history`}>
						<Tooltip title="Back">
							<ArrowBackIcon />
						</Tooltip>
					</Link>
					{searchdata.length > 0 &&
						searchdata.map((item, index) => (
							<ShowDef key={index} wordData={item} />
						))}
				</>
			)}
		</>
	)
}

export default WordMeaning
