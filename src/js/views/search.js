import React, { useState, useContext } from "react";
import "../../styles/home.scss";
import gitHub from "../../img/github.png";
import { Context } from "../store/appContext";

export const Search = () => {
	// const { store, actions } = useContext(Context);
	// const [search, setSearch] = useState("");

	return (
		<div>
			<form className="form-inline my-2 my-lg-0 m-4">
				<input
					// onChange={e => setSearch(e.target.value)}
					// type="text"
					className="form-control mr-sm-2"
					type="search"
					placeholder="Search"
					aria-label="Search"
				/>
				<button
					// onClick={() => actions.login(jobs, freelancers, history)}
					className="btn btn-outline-primary my-2 my-sm-0"
					type="submit">
					Search
				</button>
			</form>
			<div className="container">
				<div className="jumbotron jumbotron-fluid">
					<div className="container">
						<h1 className="display-5">Search results for GitHub jobs</h1>
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
