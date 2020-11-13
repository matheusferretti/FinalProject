import React from "react";
import logoDraft from "../../img/LogoDraft.jpg";
import person1 from "../../img/person1.png";
import person2 from "../../img/person2.png";
import person3 from "../../img/person3.png";
import "../../styles/home.scss";

export const Home = () => (
	<div>
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
		</div>
		<div className="d-flex mt-5">
			<img src={person1} />
			<h2 className="text-right d-flex align-items-center">ABOUT US</h2>
			<div className="jumbotron ml-auto">
				<div className="container">
					<h1 className="display-4">Hey fellow developer, this is what we do:</h1>
					<h3>
						This platform was created to offer a simple and efficient way for software developers to embrace
						freelance opportunities that extend across the world. Shall we take the next step?
					</h3>
				</div>
			</div>
		</div>
		<div className="mt-5">
			<div className="text-right mt-5 mr-5">
				<h3>
					WHY S/W?
					<img src={person2} />
				</h3>
			</div>
			<div className="jumbotron mr-auto">
				<div className="container">
					<h1 className="display-4">Because yes!</h1>
					<h3>
						Just kidding... Freelancing can be difficult, and making connections can make it more
						time-consuming. Our philosophy is based on minimizing time and increasing convenience, both for
						freelancers and recruiters.
					</h3>
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

	// <div className="text-center mt-5">
	// 	<img src={logoDraft} />
	// 	<div className="d-flex justify-content-center">
	// 		<form className="form-inline my-2 my-lg-4">
	// 			<input
	// 				className="form-control mr-sm-2"
	// 				type="search"
	// 				placeholder="Search for jobs, companies, or prospects"
	// 				aria-label="Search"
	// 			/>
	// 			<button className="btn btn-outline-primary my-2 my-sm-0" type="submit">
	// 				Search
	// 			</button>
	// 		</form>
	// 	</div>
	// 	<div className="d-flex">
	// 	<div className="d-flex text-left d-inline">
	// 		<h3 className="mt-5 ml-5 animate__backInLeft">
	// 			<img src={person1} />
	// 			ABOUT US
	// 		</h3>
	// 	</div>
	// 	<div className="d-flex align-items-center">
	// 		<h2 className="text-right">We are a company that...</h2>
	// 	</div>
	// 	</div>
	// 	<div className="text-right mt-5 mr-5">
	// 		<h3>
	// 			WHY S/W?
	// 			<img src={person2} />
	// 		</h3>
	// 	</div>
	// 	<div className="text-left mt-5 ml-5">
	// 		<h3>
	// 			<img src={person3} />
	// 			CONTACT US!
	// 		</h3>
	// 	</div>
	// </div>
);
