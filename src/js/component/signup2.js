import React, { useState, useContext } from "react";
import "../../styles/home.scss";
// import PropTypes from "prop-types";
import logoDraft from "../../img/LogoDraft.jpg";

export const Signup2 = props => {
	const [name, setName] = useState();
	const [email, setEmail] = useState();
	const [password, setPassword] = useState();
	const [username, setUsername] = useState();

	return (
		<div className="d-flex justify-content-center mt-5">
			<form className="border" style={{ width: "25rem", padding: "80px" }}>
				<div className="d-flex justify-content-center">
					<img src={logoDraft} style={{ width: "20rem", height: "80px" }} />
				</div>
				<div className="form-group">
					<label htmlFor="examplefirstName">Full Name</label>
					<input
						onChange={e => setName(e.target.value)}
						type="text"
						className="form-control"
						id="examplefirstName"
						placeholder="Enter first name"
					/>
				</div>
				<div className="form-group">
					<label htmlFor="exampleInputEmail1">Email address</label>
					<input
						onChange={e => setEmail(e.target.value)}
						type="email"
						className="form-control"
						id="exampleInputEmail1"
						aria-describedby="emailHelp"
						placeholder="Enter email"
					/>
				</div>
				<div className="form-group">
					<label htmlFor="exampleInputPassword1">Password</label>
					<input
						onChange={e => setPassword(e.target.value)}
						type="password"
						className="form-control"
						id="exampleInputPassword1"
						placeholder="Password"
					/>
				</div>
				<div className="d-flex justify-content-center">
					<button
						onClick={() => actions.signup2(email, name, username, password)}
						type="submit"
						className="btn btn-primary">
						Submit
					</button>
				</div>
			</form>
		</div>
	);
};
