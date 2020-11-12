import React from "react";
import "../../styles/home.scss";

export const Card = () => {
	return (
		<div className="card m-4">
			<div className="card-header">
				<h5>Matheus Ferretti</h5>
			</div>
			<div className="card-body">
				<p className="card-title">Python Developer</p>
				<p className="card-text">Royal Caribbean</p>
				<button className="btn btn-outline-primary my-2 my-sm-0" type="submit">
					See Profile
				</button>
			</div>
		</div>
	);
};
