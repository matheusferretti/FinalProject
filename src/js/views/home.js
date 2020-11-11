import React from "react";
import logoDraft from "../../img/LogoDraft.jpg";
import person1 from "../../img/person1.png";
import person2 from "../../img/person2.png";
import person3 from "../../img/person3.png";
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
				<button className="btn btn-outline-primary my-2 my-sm-0" type="submit">
					Search
				</button>
			</form>
		</div>
		<div className="d-flex">
			<div className="text-left d-inline">
				<h3 className="mt-5 ml-5">
					<img src={person1} />
					ABOUT US
				</h3>
			</div>
		</div>
		<div className="text-right mt-5 mr-5">
			<h3>
				WHY S/W?
				<img src={person2} />
			</h3>
		</div>
		<div className="text-left mt-5 ml-5">
			<h3>
				<img src={person3} />
				CONTACT US!
			</h3>
		</div>
	</div>
);
