import { Link } from "react-router-dom"

const navStyle = {
	backgroundColor: "#0e0e0e",
	color: "white",
	fontSize: "1.5rem",
	display: "flex",
	justifyContent: "space-between",
	alignItems: "center",
	padding: "0.5rem 5%",
}

const NavBar = () => {
	return (
		<div style={navStyle}>
			<h1>Dictionary App</h1>
			<div className="navLinks">
				<Link to="/">Home</Link>
				<Link to="/history">History</Link>
			</div>
		</div>
	)
}

export default NavBar
