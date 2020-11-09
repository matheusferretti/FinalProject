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
			<div className="dropdown">
				<button
					className="btn btn-secondary dropdown-toggle"
					type="button"
					id="dropdownMenuButton"
					data-toggle="dropdown"
					aria-haspopup="true"
					aria-expanded="false">
					Account Type
				</button>
				<div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
					<a className="dropdown-item" href="#">
						Freelancing
					</a>
					<a className="dropdown-item" href="#">
						Recruitment
					</a>
				</div>
			</div>
			<button type="submit" className="btn btn-primary">
				Next
			</button>
		</form>
	);
};
