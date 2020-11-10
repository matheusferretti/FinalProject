import React from "react";
import "../../styles/home.scss";

export const Recruiter = () => {
	return (
		<div>
			<div className="card float-left m-5" style={{ width: "18rem" }}>
				<img src="" className="rounded-circle" alt="" />
				<div className="card-body">
					<h5 className="card-title">SYMP-WEB</h5>
					<p className="card-text">Company Type (Tech, HR)</p>
				</div>
				<ul className="list-group list-group-flush">
					<li className="list-group-item">Ratings</li>
					<li className="list-group-item">Website Link</li>
					<li className="list-group-item">Social Media Link</li>
				</ul>
			</div>
			<div className="container">
				<div className="jumbotron jumbotron-fluid">
					<div className="container">
						<h1 className="display-5">Introduction</h1>
						<p className="lead">Description</p>
					</div>
				</div>
				<div className="jumbotron jumbotron-fluid">
					<div className="container">
						<h1 className="display-4">Jobs Posted</h1>
						<ul>
							<li>One</li>
							<li>Two</li>
							<li>Three</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};
