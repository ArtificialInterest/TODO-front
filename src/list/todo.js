import React from 'react';
import './todo.css';

export default function ToDo(props) {
	return (
		<div className="todo">
			<div className="title">
				<h1>{props.title}</h1>
				{props.action}
			</div>
			<div className="tiles"> {props.array}</div>
		</div>
	);
}
