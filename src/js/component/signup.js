import React, { useState, useContext } from "react";
import "../../styles/home.scss";
// import PropTypes from "prop-types";
import logoDraft from "../../img/LogoDraft.jpg";

export const Signup = props => {
	return (
		<div className="d-flex justify-content-center mt-5">
			<form className="border" style={{ width: "25rem", padding: "80px" }}>
				<div className="d-flex justify-content-center">
					<img src={logoDraft} style={{ width: "20rem", height: "80px" }} />
				</div>
				<div className="form-group">
					<label htmlFor="examplefirstName">Company Name</label>
					<input
						type="text"
						className="form-control"
						id="examplefirstName"
						placeholder="Enter company name"
					/>
				</div>
				<div className="form-group">
					<label htmlFor="examplelastName">Email address</label>
					<input type="text" className="form-control" id="examplelastName" placeholder="Enter email" />
				</div>
				<div className="form-group">
					<label htmlFor="exampleInputEmail1">Company URL</label>
					<input
						type="email"
						className="form-control"
						id="exampleInputEmail1"
						aria-describedby="emailHelp"
						placeholder="URL"
					/>
				</div>
				<div className="form-group">
					<label htmlFor="exampleInputPassword1">Password</label>
					<input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
				</div>
				<div className="d-flex justify-content-center">
					<button type="submit" className="btn btn-primary">
						Submit
					</button>
				</div>
			</form>
		</div>
	);
};
