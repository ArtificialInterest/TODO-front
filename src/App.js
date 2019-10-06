import Holder from './list/container';
import NavBar from './page/navbar';
import React, { Component } from 'react';

import './App.css';

// import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
//global
window.JWT = null;
window.email = null;

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			data: [],
			doneData: [],
			index: 0
		};
	}
	fetchToDo() {
		let getParam = { method: 'GET' };
		let head = { Authorization: `Bearer ${window.JWT}`, 'Content-type': 'application/x-www-form-urlencoded' };
		getParam.headers = head;

		fetch('http://localhost:3000/users/getTasks', getParam)
			.then(function(response) {
				if (response.ok) {
					return response.json();
				} else {
					throw new Error('Oops! Something went wrong!');
				}
			})
			.then((response) => {
				console.log(response);
				this.setState({ data: response[0] });
				this.setState({ doneData: response[1] });
			})
			.catch(function(error) {
				console.log('Oops! Something went wrong, try again!');
			});
	}

	doneButton(ind) {
		console.log(ind);
		let index = encodeURIComponent(ind);
		console.log(index);
		let bodyContent = 'index=' + index;
		let getParam = { method: 'POST', body: bodyContent };

		let head = { Authorization: `Bearer ${window.JWT}`, 'Content-type': 'application/x-www-form-urlencoded' };
		getParam.headers = head;

		fetch('http://localhost:3000/users/donetask', getParam)
			.then((response) => {
				if (response.ok) {
					this.fetchToDo();
					return;
				} else {
					throw new Error('Oops! Something went wrong!');
				}
			})
			.catch(function(error) {
				console.log('Oops! Something went wrong, try again!');
			});
	}

	render() {
		return (
			<div className="app">
				<NavBar fetchToDo={() => this.fetchToDo()} />
				<Holder
					data={this.state.data}
					doneData={this.state.doneData}
					fetchToDo={() => this.fetchToDo()}
					doneButton={this.doneButton}
				/>
			</div>
		);
	}
}

export default App;
