import ActionButton from '../page/actionbutton';
import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import Tile from './tile';
import ToDo from './todo';

import './container.css';

class Holder extends Component {
	constructor(props) {
		super(props);
		this.generateTiles = this.generateTiles.bind(this);
		// this.toggleNewTask = this.toggleNewTask.bind(this);
		this.state = {
			isOpen: false,
			EiAnchor: null
		};
	}

	generateTiles(taskData) {
		let array = [];
		let len = taskData.length;
		for (let i = 0; i < len; i++) {
			let data = taskData[i];
			console.log(data);
			let title = data.task;
			let description = data.desc;
			let index = data.index;
			console.log(index);

			array.push(
				<Row sm="100">
					<Col sm="">
						<Tile title={title} description={description} doneButton={() => this.props.doneButton(index)} />
					</Col>
				</Row>
			);
			console.log(array);
		}
		return array;
	}

	render() {
		let todoArray = this.generateTiles(this.props.data);
		console.log(todoArray);

		let doneArray = this.generateTiles(this.props.doneData);
		return (
			<div className="container">
				<Row>
					<Col md="6">
						<ToDo
							title={'ToDo'}
							array={todoArray}
							action={<ActionButton fetchToDo={this.props.fetchToDo} />}
						/>
					</Col>
					<Col md="6">
						<ToDo title={'Done'} array={doneArray} />
					</Col>
				</Row>
			</div>
		);
	}
}

export default Holder;
