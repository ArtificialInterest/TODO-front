import { Button, Form, FormGroup, Input } from 'reactstrap';
import { IconButton } from '@material-ui/core';
import logo from '../page/symbolBlack.png';
import React from 'react';

import './forms.css';

export default function NewTask(props) {
	return (
		<Form className="form">
			<h1>{props.title}</h1>
			<IconButton>
				<img alt={'Logo'} src={logo} style={{ height: '60px', margin: '25px 0 35px 0', opacity: '0.5' }} />
			</IconButton>

			<FormGroup>
				<Input
					onChange={props.handleChange}
					type={props.fieldOne}
					name="title"
					id="inputField"
					placeholder={props.fieldOne}
				/>
			</FormGroup>
			<FormGroup>
				<Input
					onChange={props.handleChange2}
					type={props.fieldTwo}
					name="description"
					id="inputField"
					placeholder={props.fieldTwo}
				/>
			</FormGroup>

			<Button onClick={props.submit} id="circle">
				Submit
			</Button>
		</Form>
		//    </div>
	);
}
