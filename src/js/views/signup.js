import React, { useState, useContext } from "react";
import "../../styles/home.scss";
import PropTypes from "prop-types";

export const Signup = props => {
    const [email, setEmail] = useState();
	const [password, setPassword] = useState();
    const [username, setUsername] = useState();
    
	return (
		<form>
			{props.isFreelancer ? (
				<div>
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
						<label htmlFor="examplefirstName">Username</label>
						<input
                            onChange={e => setUsername(e.target.value)}
							type="text"
							className="form-control"
							id="examplename"
							placeholder="Enter username"
						/>
					</div>
					{/* <div className="form-group">
						<label htmlFor="examplelastName">Last Name</label>
						<input
							type="text"
							className="form-control"
							id="examplelastName"
							placeholder="Enter last name"
						/>
					</div> */}
				</div>
			) : (
				<div className="form-group">
					<label htmlFor="examplelastName">Company Name</label>
					<input type="text" className="form-control" id="examplelastName" placeholder="Enter company name" />
				</div>
			)}
			{!props.isFreelancer && (
				<div className="form-group">
					<label htmlFor="exampleid">Company URL</label>
					<input type="url" className="form-control" id="exampleid" placeholder="Enter company url" />
				</div>
			)}
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
				<input onChange={e => setPassword(e.target.value)} type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
			</div>
			<button onClick={() => actions.login(email, password, username)} type="submit" className="btn btn-primary">
				Submit
			</button>
		</form>
	);
};

Signup.propTypes = {
	isFreelancer: PropTypes.bool
};
