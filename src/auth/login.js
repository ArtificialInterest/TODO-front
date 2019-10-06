import React from 'react';
import { Row, Col } from 'reactstrap';
import TextField from '@material-ui/core/TextField';

const login = () => {
	return (
		<div>
			<h1>Login</h1>
			<Row>
				<TextField
					required
					id="filled-required"
					label="Username"
					defaultValue=""
					margin="normal"
					variant="filled"
				/>
			</Row>
			<Row>
				<TextField
					required
					id="filled-required"
					label="Password"
					defaultValue=""
					margin="normal"
					variant="filled"
				/>
			</Row>
		</div>
	);
};

export default login;
