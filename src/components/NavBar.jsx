import { Link } from "react-router-dom"

const NavBar = () => {
	return (
		<nav>
			<h1>Dictionary App</h1>
			<div className="navLinks">
				<Link to="/">Home</Link>
				<Link to="/history">History</Link>
			</div>
		</nav>
	)
}

export default NavBar
