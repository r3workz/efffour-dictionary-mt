import LoaderContext from "./LoaderContext"
import { useState } from "react"

const LoaderProvider = props => {
	const [loading, setLoading] = useState(false)
	return (
		<LoaderContext.Provider value={{ loading, setLoading }}>
			{props.children}
		</LoaderContext.Provider>
	)
}

export default LoaderProvider
