import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context);

	return (
		<nav className="navbar navbar-dark bg-dark mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">WELCOME TO S/W</span>
			</Link>
			<div className="ml-auto">
				{store.currentUser.token == null ? (
					<Link to="/login">
						<button className="btn btn-primary">LOG-IN</button>
					</Link>
				) : (
					<Link to="/login">
						<button onClick={() => actions.logout()} className="btn btn-primary">
							LOG-OUT
						</button>
					</Link>
				)}
				{/* <Link to="/signup"> */}
				<button className="btn btn-secondary ml-auto">
					<div className="dropdown">
						<button
							className="btn btn-secondary dropdown-toggle"
							type="button"
							data-toggle="dropdown"
							aria-haspopup="true"
							aria-expanded="false"
							style={{ padding: "0" }}>
							Sign-Up
						</button>
						<div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
							<Link to="/signup">
								<a className="dropdown-item" href="#">
									Freelancer
								</a>
							</Link>
							<Link to="/signup">
								<a className="dropdown-item" href="#">
									Company
								</a>
							</Link>
						</div>
					</div>
				</button>
				{/* </Link> */}
			</div>
		</nav>
	);
};
