import React from "react";
import "../../styles/home.scss";

export const Card = () => {
	return (
		<div className="card">
			<div className="card-header">
				<h5>Matheus Ferretti</h5>
			</div>
			<div className="card-body">
				<p className="card-title">Python Developer</p>
				<p className="card-text">Royal Caribbean</p>
				<a href="#" className="btn btn-primary">
					See Profile
				</a>
			</div>
		</div>
	);
};
