import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { DropdownButton } from "./dropdown";

export const Navbar = () => {
	const { store, actions } = useContext(Context);

	return (
		<nav className="navbar navbar-dark bg-dark mb-3">
			<Link to="/">
				<h3>
					<span className="navbar-brand mb-0 h1">SYMP-WEB</span>
				</h3>
			</Link>
			<div className="ml-auto d-flex">
				<div className="m-2">
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
				</div>
				<div className="m-2">
					<DropdownButton />
				</div>
			</div>
		</nav>
	);
};
