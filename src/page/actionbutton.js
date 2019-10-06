import { Add } from '@material-ui/icons';
import { Fab } from '@material-ui/core';
import { IconButton } from '@material-ui/core';
import NewTask from '../task/newtask';
import Popover from '@material-ui/core/Popover';
import React from 'react';

import './actionbutton.css';

export default function ActionButton(props) {
	const [ anchorEl, setAnchorEl ] = React.useState(null);
	const [ task, setTask ] = React.useState(null);
	const [ desc, setDesc ] = React.useState(null);

	function handleClick(event) {
		setAnchorEl(event.currentTarget);
	}

	function handleClose() {
		setAnchorEl(null);
	}
	function handleChange(event) {
		setTask(event.currentTarget.value);
		console.log(task);
	}
	function handleChange2(event) {
		setDesc(event.currentTarget.value);
		console.log(desc);
	}
	function handleSubmit() {
		let thisTask = encodeURIComponent(task);
		let thisDesc = encodeURIComponent(desc);
		let bodyContent = 'task=' + thisTask + '&desc=' + thisDesc;
		let getParam = { method: 'POST', body: bodyContent };

		let head = { Authorization: `Bearer ${window.JWT}`, 'Content-type': 'application/x-www-form-urlencoded' };
		getParam.headers = head;

		fetch('http://localhost:3000/users/newtask', getParam)
			.then(function(response) {
				if (response.ok) {
					console.log('Success');
				} else {
					throw new Error('Oops! Something went wrong!');
				}
			})
			.then(() => {
				props.fetchToDo();
			})
			.catch(function(error) {
				console.log('Oops! Something went wrong, try again!');
			});
	}
	const open = Boolean(anchorEl);
	const id = open ? 'simple-popover' : undefined;
	return (
		<div className="bottomRight">
			<Fab id="actionButton">
				<IconButton onClick={handleClick}>
					<Add />
				</IconButton>
			</Fab>
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
						title="New Task"
						fieldOne="Task Name"
						fieldTwo="Description"
						handleChange={handleChange}
						handleChange2={handleChange2}
						submit={handleSubmit}
					/>
				</div>
			</Popover>
		</div>
	);
}
