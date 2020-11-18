import React, { useState, useContext } from "react";
import "../../styles/home.scss";
import { Context } from "../store/appContext";
import { useHistory } from "react-router-dom";
import logo from "../../img/LogoDraft2.png";
import "animate.css";

export const Login = () => {
	const { store, actions } = useContext(Context);
	const history = useHistory();
	const [email, setEmail] = useState();
	const [password, setPassword] = useState();

	return (
		<div className="container">
			<img
				className="animate__animated animate__zoomInRight"
				src={logo}
				style={{ width: "200px;", height: "200px" }}
			/>
			<div className="d-flex justify-content-center">
				<form className="mx-auto" style={{ width: "500px;" }}>
					<div className="form-group">
						<div className="col-xs-4">
							<label htmlFor="exampleInputEmail1" />
							<input
								onChange={e => setEmail(e.target.value)}
								type="email"
								id="exampleInputEmail1"
								aria-describedby="emailHelp"
								placeholder="Enter email"
								value={email}
							/>
						</div>
					</div>
					<div className="form-group">
						<div className="col-xs-4">
							<label htmlFor="exampleInputPassword1" />
							<input
								onChange={e => setPassword(e.target.value)}
								type="password"
								id="exampleInputPassword1"
								placeholder="Password"
								value={password}
							/>
						</div>
					</div>
					<div className="d-flex justify-content-center">
						<button
							onClick={() => actions.login(email, password, history)}
							type="submit"
							className="btn btn-primary">
							Submit
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};
