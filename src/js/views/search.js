import React from "react";
import "../../styles/home.scss";

export const Search = () => {
	return (
		<div>
			<form className="form-inline my-2 my-lg-0">
				<input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
				<button className="btn btn-outline-primary my-2 my-sm-0" type="submit">
					Search
				</button>
			</form>
			<div className="container">
				<div className="jumbotron jumbotron-fluid">
					<div className="container">
						<h1 className="display-5">Search results for python jobs</h1>
					</div>
				</div>
				<div className="jumbotron jumbotron-fluid">
					<div className="container">
						<ul>
							<li>
								<h3>Job One</h3>
							</li>
							<li>
								<h3>Job Two</h3>
							</li>
							<li>
								<h3>Job Three</h3>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};
