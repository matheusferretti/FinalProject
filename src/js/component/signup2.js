import React, { useState, useContext } from "react";
import "../../styles/home.scss";
// import PropTypes from "prop-types";
import logoDraft from "../../img/LogoDraft.jpg";

export const Signup2 = props => {
	return (
		<div className="d-flex justify-content-center mt-5">
			<form className="border" style={{ width: "25rem", padding: "80px" }}>
				<div className="d-flex justify-content-center">
					<img src={logoDraft} style={{ width: "20rem", height: "80px" }} />
				</div>
				<div className="form-group">
					<label htmlFor="examplefirstName">First Name</label>
					<input type="text" className="form-control" id="examplefirstName" placeholder="Enter first name" />
				</div>
				<div className="form-group">
					<label htmlFor="examplelastName">Last Name</label>
					<input type="text" className="form-control" id="examplelastName" placeholder="Enter last name" />
				</div>
				<div className="form-group">
					<label htmlFor="exampleInputEmail1">Email address</label>
					<input
						type="email"
						className="form-control"
						id="exampleInputEmail1"
						aria-describedby="emailHelp"
						placeholder="Enter email"
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

// <form>
// 	{props.isFreelancer ? (
// 		<div>
// 			<div className="form-group">
// 				<label htmlFor="examplefirstName">First Name</label>
// 				<input
// 					type="text"
// 					className="form-control"
// 					id="examplefirstName"
// 					placeholder="Enter first name"
// 				/>
// 			</div>
// 			<div className="form-group">
// 				<label htmlFor="examplelastName">Last Name</label>
// 				<input
// 					type="text"
// 					className="form-control"
// 					id="examplelastName"
// 					placeholder="Enter last name"
// 				/>
// 			</div>
// 		</div>
// 	) : (
// 		<div className="form-group">
// 			<label htmlFor="examplelastName">Company Name</label>
// 			<input type="text" className="form-control" id="examplelastName" placeholder="Enter company name" />
// 		</div>
// 	)}
// 	{!props.isFreelancer && (
// 		<div className="form-group">
// 			<label htmlFor="exampleid">Company URL</label>
// 			<input type="url" className="form-control" id="exampleid" placeholder="Enter company url" />
// 		</div>
// 	)}
// 	<div className="form-group">
// 		<label htmlFor="exampleInputEmail1">Email address</label>
// 		<input
// 			type="email"
// 			className="form-control"
// 			id="exampleInputEmail1"
// 			aria-describedby="emailHelp"
// 			placeholder="Enter email"
// 		/>
// 	</div>
// 	<div className="form-group">
// 		<label htmlFor="exampleInputPassword1">Password</label>
// 		<input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
// 	</div>
// 	<button type="submit" className="btn btn-primary">
// 		Submit
// 	</button>
// </form>

// Signup.propTypes = {
// 	isFreelancer: PropTypes.bool
// };

// import React from "react";

// export const Signup2 = () => {
// 	return (
// 		<form>
// 			<div className="form-group">
// 				<label htmlFor="examplefirstName">First Name</label>
// 				<input type="text" className="form-control" id="examplefirstName" placeholder="Enter first name" />
// 			</div>
// 			<div className="form-group">
// 				<label htmlFor="examplelastName">Last Name</label>
// 				<input type="text" className="form-control" id="examplelastName" placeholder="Enter last name" />
// 			</div>
// 			<div className="form-group">
// 				<label htmlFor="exampleInputEmail1">Email address</label>
// 				<input
// 					type="email"
// 					className="form-control"
// 					id="exampleInputEmail1"
// 					aria-describedby="emailHelp"
// 					placeholder="Enter email"
// 				/>
// 			</div>
// 			<div className="form-group">
// 				<label htmlFor="exampleInputPassword1">Password</label>
// 				<input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
// 			</div>
// 			<button type="submit" className="btn btn-primary">
// 				Submit
// 			</button>
// 		</form>
// 	);
// };
