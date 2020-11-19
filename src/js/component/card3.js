import React from "react";
import "../../styles/home.scss";
import PropTypes from "prop-types";

export const Card3 = props => {
	return (
		<div className="card m-4">
			<div className="card-header">
				<h5>
					{props.job.companyName} - {props.job.title}
				</h5>
			</div>
			<div className="card-body">
				<p className="card-text">{props.job.companyType}</p>
				<p className="card-text">{props.job.location}</p>
				<button className="btn btn-outline-primary my-2 my-sm-0" type="submit">
					Apply
				</button>
			</div>
		</div>
	);
};

Card3.propTypes = {
	job: PropTypes.object
};
