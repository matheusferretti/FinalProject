import React from "react";
import "../../styles/home.scss";

export const User = () => {
	return (
		<div>
			<div className="card float-left m-5" style={{ width: "18rem" }}>
				<img src="" className="rounded-circle" alt="" />
				<div className="card-body">
					<h5 className="card-title">Matheus Ferretti</h5>
					<p className="card-text">Python Developer</p>
				</div>
				<ul className="list-group list-group-flush">
					<li className="list-group-item">Education</li>
					<li className="list-group-item">Ratings</li>
					<li className="list-group-item">
						Skills
						<ul>
							<li>Skill 1</li>
							<li>Skill 2</li>
							<li>Skill 3</li>
						</ul>
					</li>
					<li className="list-group-item">Availability</li>
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
						<h1 className="display-4">My Projects</h1>
						<ul>
							<li>One</li>
							<li>Two</li>
							<li>Three</li>
						</ul>
					</div>
				</div>
				<div className="jumbotron jumbotron-fluid">
					<div className="container">
						<h1 className="display-4">Experience</h1>
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
