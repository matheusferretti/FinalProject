import React, { useState, useContext } from "react";
import "../../styles/home.scss";
import { Context } from "../store/appContext";
import { useHistory } from "react-router-dom";

export const Login = () => {
	// const [contact, setContact] = useState({
	// 	email: "",
	//  password: ""
	// });

	const { store, actions } = useContext(Context);
	const history = useHistory();
	const [email, setEmail] = useState();
	const [password, setPassword] = useState();

	return (
		<form>
			<div className="form-group">
				<label htmlFor="exampleInputEmail1">Email address</label>
				<input
					onChange={e => setEmail(e.target.value)}
					type="email"
					className="form-control"
					id="exampleInputEmail1"
					aria-describedby="emailHelp"
					placeholder="Enter email"
					value={email}
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
					value={password}
				/>
			</div>
			<button onClick={() => actions.login(email, password, history)} type="submit" className="btn btn-primary">
				Submit
			</button>
		</form>
	);
};
