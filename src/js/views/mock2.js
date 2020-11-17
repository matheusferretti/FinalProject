import React from "react";
import gitHub from "../../img/github.png";

export const Mock2 = () => {
	return (
		<div>
			<div className="card float-left m-5" style={{ width: "18rem" }}>
				<img src={gitHub} className="rounded" style={{ width: "285px", height: "285px" }} alt="" />
				<div className="card-body">
					<h5 className="card-title">GitHub</h5>
					<p className="card-text">Repository Hosting Services</p>
				</div>
				<ul className="list-group list-group-flush">
					<li className="list-group-item">5 Stars</li>
					<li className="list-group-item">
						<a href="https://github.com/">GitHub</a>
					</li>
					<li className="list-group-item">
						<a href="https://www.linkedin.com/company/github/">GitHub LinkedIn</a>
					</li>
				</ul>
			</div>
			<div className="container mt-5">
				<div className="jumbotron jumbotron-fluid">
					<div className="container">
						<h1 className="display-5">Welcome to GitHub!</h1>
						<p className="lead">
							GitHub is the best place to share code with friends, co-workers, classmates, and complete
							strangers. Over 31 million people use GitHub to build amazing things together across 97+
							million repositories. With all the collaborative features of GitHub, it has never been
							easier for individuals and teams to write faster, better code.
						</p>
					</div>
				</div>
				<div className="jumbotron jumbotron-fluid">
					<div className="container">
						<h1 className="display-4">Jobs Posted</h1>
						<div className="d-flex">
							<div className="card m-3" style={{ width: "18rem" }}>
								<img
									src={gitHub}
									className="rounded m-4"
									style={{ width: "50px", height: "50px" }}
									alt=""
								/>
								<div className="card-body">
									<h5 className="card-title">Security Analyst - GitHub Security Lab</h5>
									<p className="card-text">GitHub</p>
									<p className="card-text">Miami, FL</p>
									<button className="btn btn-outline-primary my-2 my-sm-0" type="submit">
										Apply
									</button>
								</div>
								<small className="card-text text-muted m-3">Posted 5 days ago</small>
							</div>
							<div className="card m-3" style={{ width: "18rem" }}>
								<img
									src={gitHub}
									className="rounded m-4"
									style={{ width: "50px", height: "50px" }}
									alt=""
								/>
								<div className="card-body">
									<h5 className="card-title">Data Scientist - Business Intelligence</h5>
									<p className="card-text">GitHub</p>
									<p className="card-text">Orlando, FL</p>
									<button className="btn btn-outline-primary my-2 my-sm-0" type="submit">
										Apply
									</button>
								</div>
								<small className="card-text text-muted m-3">Posted 1 month ago</small>
							</div>
							<div className="card m-3" style={{ width: "18rem" }}>
								<img
									src={gitHub}
									className="rounded m-4"
									style={{ width: "50px", height: "50px" }}
									alt=""
								/>
								<div className="card-body">
									<h5 className="card-title">Software Engineer - Admin Experiences</h5>
									<p className="card-text">GitHub</p>
									<p className="card-text">Chatanooga, TN</p>
									<button className="btn btn-outline-primary my-2 my-sm-0" type="submit">
										Apply
									</button>
								</div>
								<small className="card-text text-muted m-3">Posted 2 weeks ago</small>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
