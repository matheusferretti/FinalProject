import React from "react";
import "../../styles/home.scss";

export default const Card2 = () => {
    <div className="d-flex">
		<div className="card m-3" style={{ width: "18rem" }}>
			<img
				src={gitHub}
				className="rounded m-4"
				style={{ width: "50px", height: "50px" }}
				alt=""
			/>
			<div className="card-body">
				<h5 className="card-title">Security Analyst - GitHub Security Lab</h5>
				<p className="card-text">GitHub</p>
				<p className="card-text">Miami, FL</p>
				<button className="btn btn-outline-primary my-2 my-sm-0" type="submit">
					Apply
				</button>
			</div>
			<small className="card-text text-muted m-3">Posted 5 days ago</small>
	</div>
}