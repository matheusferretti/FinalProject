import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import mat2 from "../../img/mat2.png";

export const Mock = () => {
	const { store, actions } = useContext(Context);

	const [user, setUser] = useState({
		name: "",
		username: "",
		headline: "",
		email: ""
	});

	return (
		<div>
			<div className="card float-left m-2" style={{ width: "18rem" }}>
				<img src={mat2} className="img-thumbnail" style={{ width: "285px", height: "285px" }} alt="" />
				<div className="card-body">
					<h5 className="card-title">
						<input
							onChange={e => setUser({ ...user, name: e.target.value })}
							type="text"
							className="form-control"
							placeholder="Full Name"
						/>
						<button
							onClick={() => actions.updateUser(user.name)}
							type="button"
							className="btn btn-primary form-control">
							{" "}
							Save
						</button>
					</h5>
					<p className="card-text">
						<input
							onChange={e => setUser({ ...user, username: e.target.value })}
							type="text"
							className="form-control"
							placeholder="Username"
						/>
						<button
							onClick={() => actions.updateUser(user.username)}
							type="button"
							className="btn btn-primary form-control">
							{" "}
							Save
						</button>
					</p>
					<p className="card-text">
						<input
							onChange={e => setUser({ ...user, headline: e.target.value })}
							type="text"
							className="form-control"
							placeholder="Headline"
						/>
						<button
							onClick={() => actions.updateUser(user.headline)}
							type="button"
							className="btn btn-primary form-control">
							{" "}
							Save
						</button>
					</p>
					<p className="card-text">
						<input
							onChange={e => setUser({ ...user, email: e.target.value })}
							type="email"
							className="form-control"
							placeholder="Email"
						/>
						<button
							onClick={() => actions.updateUser(user.email)}
							type="button"
							className="btn btn-primary form-control">
							{" "}
							Save
						</button>
					</p>
				</div>
				<ul className="list-group list-group-flush">
					<li className="list-group-item">Full-Stack Developer</li>
					<li className="list-group-item">5 Stars</li>
					<li className="list-group-item">
						<strong>Skills</strong>
						<ul>
							<li>Python</li>
							<li>React.js</li>
							<li>Vanilla.js</li>
						</ul>
					</li>
					<li className="list-group-item">Open for job opportunities</li>
				</ul>
			</div>
			<div className="container mt-5">
				<div className="jumbotron jumbotron-fluid">
					<div className="container">
						<h1 className="display-5">Welcome to my page!</h1>
						<p className="lead">
							FIU Economics Alumnus with a background in Software Devlopment, I am a proud Brazilian
							living in America looking for oportunities to cooperate in a team orientend environment and
							preach the pursuit of knowledge to whoever I work with.
						</p>
					</div>
				</div>
				<div className="jumbotron jumbotron-fluid">
					<div className="container">
						<h1 className="display-4">My Projects</h1>
						<ul>
							<li>
								<h4>SYMP-WEB</h4>
							</li>
							<p>
								This project was mainly developed to provide a simple and efficient platform for web
								developers to embrace freelance opportunities that extend across the entire world. The
								sudden increase of remote job opportunities opens a new gate for aspiring developers and
								it is a fact that freelancing jobs will be the beacon of productivity in the near
								future. Although this project is still at its embrionic stage, I have created this
								project with the intention to help millions of people and will be constantly developing
								it to make it available for generations to come.
							</p>
							<li>
								<h4>To-do list</h4>
							</li>
							<p>
								The to-do list is a simple app that I have created during my 4Geeks bootcamp and I have
								taken it upon myself to work on the front-end and make it look good.
							</p>
							<li>
								<h4>Star Wars</h4>
							</li>
							<p>
								This project is also another one of the 4Geeks projects and I also enjoyed the outcome.
								Just as I will continue working on the to-do list, I also intend to contine working on
								this star wars project.
							</p>
						</ul>
					</div>
				</div>
				<div className="jumbotron jumbotron-fluid">
					<div className="container">
						<h1 className="display-4">Experience</h1>
						<ul>
							<li>
								<strong>Account Manager</strong>, Kipu
							</li>
							<ul>
								<li>Sold software to other companies</li>
								<li>Consulted clients on best software available in the market</li>
								<li>Helped the BI team with analytical sales projects</li>
							</ul>
							<li>
								<strong>Inventory Specialist</strong>, Azamara
							</li>
							<ul>
								<li>Created shore excursions</li>
								<li>Worked with tour operators on creation of new tours</li>
								<li>Extended contract to tour operators</li>
							</ul>
							<li>
								<strong>Corporate Strategy Analyst</strong>, IBERIABANK
							</li>
							<ul>
								<li>Worked on excel sheets</li>
								<li>Determined client turnover rate based on data</li>
								<li>Assisted in new technology vendor selection</li>
							</ul>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};
