import React from "react";
import logoDraft from "../../img/LogoDraft.jpg";
import "../../styles/home.scss";

export const Mock = () => {
	return (
		<div>
			<div className="card float-left m-5" style={{ width: "18rem" }}>
				<img src={logoDraft} className="rounded-circle" alt="" />
				<div className="card-body">
					<h5 className="card-title">Matheus Ferretti</h5>
					<p className="card-text">Python Developer</p>
				</div>
				<ul className="list-group list-group-flush">
					<li className="list-group-item">Full-Stack Developer</li>
					<li className="list-group-item">5 Stars</li>
					<li className="list-group-item">
						Skills
						<ul>
							<li>Python</li>
							<li>React.js</li>
							<li>Vanilla.js</li>
						</ul>
					</li>
					<li className="list-group-item">Open for job opportunities</li>
				</ul>
			</div>
			<div className="container">
				<div className="jumbotron jumbotron-fluid">
					<div className="container">
						<h1 className="display-5">Welcome to my page!</h1>
						<p className="lead">
							Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
							ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
							laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
							voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
							cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
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
							<li>
								<h4>To-do list</h4>
							</li>
							<li>
								<h4>Star Wars</h4>
							</li>
						</ul>
					</div>
				</div>
				<div className="jumbotron jumbotron-fluid">
					<div className="container">
						<h1 className="display-4">Experience</h1>
						<ul>
							<li>
								<strong>Account Manager</strong>, Kaseya
							</li>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
								incididunt ut labore et dolore magna aliqua.
							</p>
							<li>
								<strong>Account Manager</strong>, Microsoft
							</li>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
								incididunt ut labore et dolore magna aliqua.
							</p>
							<li>
								<strong>Account Manager</strong>, Apple
							</li>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
								incididunt ut labore et dolore magna aliqua.
							</p>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};
