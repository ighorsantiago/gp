import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

import { states } from "../../utils/states";

export function Drop() {
	return (
		<DropdownButton id="dropdown-basic-button" title="Selecione o estado">
			{states.map(state =>
				<Dropdown.Item key={state.id} href={state.ref}>
					{state.name}
				</Dropdown.Item>
			)
			}
		</DropdownButton>
	);

	// return (
	// 	<Dropdown>
	// 		<Dropdown.Toggle
	// 			id="dropdown-basic"
	// 			variant="success"
	// 		>
	// 			Selecione seu estado
	// 		</Dropdown.Toggle>

	// 		<Dropdown.Menu>
	// 			{states.map((state) => (
	// 				<Dropdown.Item key={state.id} eventKey={state.id} href="#/action-1">
	// 					{state.name}
	// 				</Dropdown.Item>
	// 			))}
	// 			{/* <Dropdown.Item href="#/action-1">Action</Dropdown.Item> */}
	// 		</Dropdown.Menu>
	// 	</Dropdown>
	// );
}
