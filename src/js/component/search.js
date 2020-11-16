import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";

export const Search = () => {
	const { store, actions } = useContext(Context);
	const [search, setSearch] = useState("");

	return (
		<div className="d-flex justify-content-center">
			<form className="form-inline my-2 my-lg-4">
				<input
					onChange={e => setSearch(e.target.value)}
					className="form-control mr-sm-2"
					type="search"
					placeholder="Search for jobs, companies, or prospects"
					aria-label="Search"
				/>
				<button onClick={() => actions.search()} className="btn btn-outline-primary my-2 my-sm-0" type="submit">
					Search
				</button>
			</form>
		</div>
	);
};
