import React from "react";
// import logoDraft from "../../img/LogoDraft.JPG";
import "../../styles/home.scss";

export const Home = () => (
	<div className="text-center mt-5">
		<h1>SYMP-WEB</h1>
		<div className="d-flex justify-content-center">
			<form className="form-inline my-2 my-lg-4">
				<input
					className="form-control mr-sm-2"
					type="search"
					placeholder="Search for jobs, companies, or prospects"
					aria-label="Search"
				/>
				<button className="btn btn-outline-primary my-2 my-sm-0" type="submit">
					Search
				</button>
			</form>
		</div>
		<div className="text-left mt-5 ml-5">
			<h1>ABOUT US</h1>
		</div>
		<div className="text-right mt-5 mr-5">
			<h1>WHY SYMP-WEB?</h1>
		</div>
		<div className="text-left mt-5 ml-5">
			<h1>CONTACT US!</h1>
		</div>
	</div>
);
