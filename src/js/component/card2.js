import React from "react";
import "../../styles/home.scss";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export const Card2 = props => {
	return (
		<div className="card m-4">
			<div className="card-header">
				<h5>{props.recruiter.name}</h5>
			</div>
			<div className="card-body">
				<p className="card-title">{props.recruiter.companyType}</p>
				<Link to="/searchRecs">
					<button className="btn btn-outline-primary my-2 my-sm-0" type="submit">
						See Profile
					</button>
				</Link>
			</div>
		</div>
	);
};

Card2.propTypes = {
	recruiter: PropTypes.object
};
