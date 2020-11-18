import React from "react";
import Dropdown from "react-bootstrap/Dropdown";

export const DropdownButton = () => {
	return (
		<Dropdown>
			<Dropdown.Toggle variant="secondary" id="dropdown-basic">
				SIGN-UP
			</Dropdown.Toggle>

			<Dropdown.Menu>
				<Dropdown.Item href="/signup">Freelancer</Dropdown.Item>
				<Dropdown.Item href="/signup2">Recruiter</Dropdown.Item>
			</Dropdown.Menu>
		</Dropdown>
	);
};
