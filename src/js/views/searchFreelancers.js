import React, { useState, useContext } from "react";
import "../../styles/home.scss";
import gitHub from "../../img/github.png";
import { Context } from "../store/appContext";
import { Card } from "../component/card";
import { Card2 } from "../component/card2";
import logoDraft from "../../img/LogoDraft.jpg";

export const SearchFreelancers = () => {
	const { store, actions } = useContext(Context);
	const [search, setSearch] = useState("");

	return (
		<div>
			<div className="float-left" style={{ width: "350px" }}>
				<img src={logoDraft} style={{ width: "350px", height: "80px" }} />
				<form className="form-inline my-2 my-lg-0 m-4">
					<input
						onChange={e => setSearch(e.target.value)}
						type="text"
						className="form-control mr-sm-2"
						placeholder="Search Freelancers"
						aria-label="Search"
					/>
					<button
						onClick={() => actions.login(jobs, freelancers, history)}
						className="btn btn-outline-primary my-2 my-sm-0"
						type="submit">
						Search
					</button>
				</form>
			</div>
			<div className="container">
				<div className="jumbotron jumbotron-fluid">
					<div className="container">
						<h1 className="display-5 m-3">Search results for Freelancers</h1>
						{store.freelancers.map((item, index) => {
							if (
								search != "" &&
								(item.name.toLowerCase().includes(search.toLowerCase()) ||
									item.qualifications.toLowerCase().includes(search.toLowerCase()) ||
									item.technologies.toLowerCase().includes(search.toLowerCase()))
							) {
								return <Card key={index} freelancer={item} index={index} />;
							}
						})}
					</div>
				</div>
				{/* <div className="jumbotron jumbotron-fluid">
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
				</div> */}
			</div>
		</div>
	);
};
