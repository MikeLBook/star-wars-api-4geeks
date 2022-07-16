import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-dark bg-dark mb-3">
			<div className='container'>
				<Link to="/">
					<span className="navbar-brand mb-0 h1">STAR WARS API</span>
				</Link>
				<div className="ml-auto">
					{/* // right side of navbar */}
				</div>
			</div>
		</nav>
	);
};
