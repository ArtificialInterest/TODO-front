import { Menu } from '@material-ui/icons';
import React from 'react';
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

export default class DropDown extends React.Component {
	constructor(props) {
		super(props);

		this.state = {};
	}

	render() {
		// onClick for dropdownitem

		return (
			<UncontrolledDropdown nav inNavbar>
				<DropdownToggle nav caret>
					<Menu />
				</DropdownToggle>
				<DropdownMenu right>
					<DropdownItem>YEET 1</DropdownItem>
					<DropdownItem>Option 2</DropdownItem>
					<DropdownItem divider />
					<DropdownItem>Reset</DropdownItem>
				</DropdownMenu>
			</UncontrolledDropdown>
		);
	}
}
