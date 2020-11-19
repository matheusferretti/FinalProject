import React from "react";
import "../../styles/home.scss";
import PropTypes from "prop-types";

export const Card3 = props => {

    return(
        <div className="d-flex">
			<div className="card m-3" style={{ width: "18rem" }}>
				<div className="card-body">
					<h5 className="card-title">{props.job.title}</h5>
					<p className="card-text">{props.job.companyName}</p>
					<p className="card-text">{props.job.companyType}</p>
					<p className="card-text">{props.job.location}</p>
					<button className="btn btn-outline-primary my-2 my-sm-0" type="submit">
						Apply
					</button>
				</div>
				<small className="card-text text-muted m-3">Posted 5 days ago</small>
			</div>
        </div>
    )
}

Card3.propTypes = {
	job: PropTypes.object
};