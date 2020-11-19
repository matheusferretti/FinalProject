import React from "react";
import { Search } from "../component/search";
import logoDraft from "../../img/LogoDraft.jpg";
import person1 from "../../img/person1.png";
import person2 from "../../img/person2.png";
import person3 from "../../img/person3.png";
import "../../styles/home.scss";
import "animate.css";
import { Link } from "react-router-dom";

export const Home = () => (
	<div>
		<div className="text-center mt-5">
			<img className="animate__animated animate__bounceIn" src={logoDraft} />
			<div className="d-flex justify-content-center">
				<Link to="/searchRecruiters">
					<button type="button" className="btn btn-outline-primary m-2">
						Search for Employers
					</button>
				</Link>
				<Link to="/searchFreelancers">
					<button type="button" className="btn btn-outline-primary m-2">
						Search for Freelancers
					</button>
				</Link>
			</div>
			<div className="d-flex justify-content-center">
				<Link to="/searchJobs">
					<button type="button" className="btn btn-outline-primary m-2">
						Search for Jobs
					</button>
				</Link>
			</div>
		</div>
		<div className="d-flex mt-5 animate__animated animate__bounceInLeft">
			<div className="first jumbo jumbotron ml-auto d-flex">
				<div className="d-flex justify-content-center">
					<img src={person1} />
				</div>
				<div className="container">
					<h1 className="display-4">ABOUT US</h1>
					<h3>
						This platform was created to offer a simple and efficient way for software developers to embrace
						freelance opportunities that extend across the world. Shall we take the next step?
					</h3>
				</div>
			</div>
		</div>
		<div className="mt-3">
			<div className="jumbo jumbotron mr-auto">
				<div className="container">
					<h1 className="display-4">WHY S/W?</h1>
					<h3>
						Because yes! Just kidding... Freelancing can be difficult, and making connections can become
						time-consuming. Our philosophy is based on minimizing time and increasing convenience, both for
						freelancers and recruiters.
					</h3>
					<div className="text-right mt-5 mr-5">
						<img src={person2} />
					</div>
				</div>
			</div>
		</div>
		<div>
			<h3>
				<img src={person3} />
				START APPLYING!
			</h3>
		</div>
	</div>
);
