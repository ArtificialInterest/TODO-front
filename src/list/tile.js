import React, { Component } from 'react';
import './tile.css';
import { Card, CardText, CardBody, CardTitle, Button } from 'reactstrap';

class Tile extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<div style={{ marginTop: '20px', marginLeft: '10px' }}>
				<Card style={{ height: 'auto', border: '1px solid #8cbae6' }}>
					<CardBody>
						<CardTitle style={{ fontSize: '3vh' }}>{this.props.title}</CardTitle>

						<CardText style={{ fontSize: '2vh' }}>{this.props.description}</CardText>
						<div className="buttons">
							<Button id="button" onClick={this.props.doneButton}>
								Done
							</Button>

							<Button id="button">Delete</Button>
						</div>
					</CardBody>
				</Card>
			</div>
		);
	}
}

export default Tile;
