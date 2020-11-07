import React from "react";
import logoDraft from "../../img/LogoDraft.jpg";
import AboutUs from "../../img/aboutUs.jpg";
import { Link } from "react-router-dom";
import "../../styles/home.scss";

export const Home = () => (
	<div className="text-center mt-5">
		<img src={logoDraft} />
		<div className="d-flex justify-content-center">
			<form className="form-inline my-2 my-lg-4">
				<input
					className="form-control mr-sm-2"
					type="search"
					placeholder="Search for jobs, companies, or prospects"
					aria-label="Search"
				/>
				<Link to="/profile">
					<span className="btn btn-primary btn-lg" href="#" role="button">
						Profile Page
					</span>
				</Link>
				{/* <button className="btn btn-outline-primary my-2 my-sm-0" type="submit">
					Search
				</button> */}
			</form>
		</div>
		<div className="text-left d-inline">
			<h1 className="mt-5 ml-5">ABOUT US</h1>
			<img src={AboutUs} midth="200px" height="200px" />
		</div>
		<div className="text-right mt-5 mr-5">
			<h1>WHY S/W?</h1>
		</div>
		<div className="text-left mt-5 ml-5">
			<h1>CONTACT US!</h1>
		</div>
	</div>
);
