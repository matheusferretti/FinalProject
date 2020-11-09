import React from "react";
import "../../styles/home.scss";

export const Login = () => {
	// const [contact, setContact] = useState({
	// 	email: "",
	//  password: ""
	// });

	return (
		<form>
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
			<button type="submit" className="btn btn-primary">
				Submit
			</button>
		</form>
	);
};
