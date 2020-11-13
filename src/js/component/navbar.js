import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-dark bg-dark mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">WELCOME TO S/W</span>
			</Link>
			<div className="ml-auto">
				<Link to="/login">
					<button className="btn btn-primary">LOG-IN</button>
				</Link>
				<Link to="/signup">
					<button className="btn btn-secondary ml-auto">
						<div className="dropdown">
							<button
								className="btn btn-secondary dropdown-toggle"
								type="button"
								data-toggle="dropdown"
								aria-haspopup="true"
								aria-expanded="false">
								Sign-Up
							</button>
							<div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
								<a className="dropdown-item" href="#">
									Freelancer
								</a>
								<a className="dropdown-item" href="#">
									Company
								</a>
							</div>
						</div>
					</button>
				</Link>
			</div>
		</nav>
	);
};
