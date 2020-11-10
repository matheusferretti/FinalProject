import React from "react";
import "../../styles/home.scss";

export const Signup = () => {
	return (
		<form>
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
			<input type="checkbox" id="freelancer" name="freelancer" value="freelancer" placeholder="freelancer" />
			<input type="checkbox" id="recruiter" name="recruiter" value="recruiter" placeholder="recruiter" />
			<button type="submit" className="btn btn-primary">
				Next
			</button>
		</form>
	);
};
