import React from "react";
import Dropdown from "react-bootstrap/Dropdown";

export const DropdownButton = () => {
	return (
		<Dropdown>
			<Dropdown.Toggle variant="secondary" id="dropdown-basic">
				SIGN-UP
			</Dropdown.Toggle>

			<Dropdown.Menu>
				<Dropdown.Item href="/signup2">Freelancer</Dropdown.Item>
				<Dropdown.Item href="/signup">Employer</Dropdown.Item>
			</Dropdown.Menu>
		</Dropdown>
	);
};
