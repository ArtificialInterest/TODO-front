import { NavLink } from 'reactstrap';
import NewTask from '../task/newtask';
import Popover from '@material-ui/core/Popover';
import React from 'react';

export default function Auth(props) {
	const [ anchorEl, setAnchorEl ] = React.useState(null);

	function handleClick(event) {
		setAnchorEl(event.currentTarget);
	}

	function handleClose() {
		setAnchorEl(null);
	}
	const open = Boolean(anchorEl);
	const id = open ? 'simple-popover' : undefined;
	return (
		<div>
			<NavLink onClick={handleClick}>{props.title}</NavLink>

			<Popover
				open={open}
				anchorEl={anchorEl}
				onClose={handleClose}
				anchorOrigin={{
					vertical: 'bottom',
					horizontal: 'center'
				}}
				transformOrigin={{
					vertical: 'top',
					horizontal: 'center'
				}}
			>
				<div id="popover">
					<NewTask
						title={props.title}
						fieldOne="email"
						fieldTwo="password"
						handleChange={props.handleChange1}
						handleChange2={props.handleChange2}
						submit={props.submit}
					/>
				</div>
			</Popover>
		</div>
	);
}
