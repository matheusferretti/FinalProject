import React, { useState, useContext } from "react";
import "../../styles/home.scss";
import gitHub from "../../img/github.png";
import { Context } from "../store/appContext";
import { Card3 } from "../component/card3";
import logoDraft from "../../img/LogoDraft.jpg";

export const SearchJobs = () => {
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
						placeholder="Search Recruiters"
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
						<h1 className="display-5 m-3">Search results for Jobs</h1>
						{store.jobs.map((item, index) => {
							if (
								search != "" &&
								(item.companyName.toLowerCase().includes(search.toLowerCase()) ||
									item.location.toLowerCase().includes(search.toLowerCase()) ||
									item.title.toLowerCase().includes(search.toLowerCase()) ||
									item.companyType.toLowerCase().includes(search.toLowerCase()))
							) {
								return <Card3 key={index} job={item} index={index} />;
							}
						})}
					</div>
				</div>
			</div>
		</div>
	);
};
