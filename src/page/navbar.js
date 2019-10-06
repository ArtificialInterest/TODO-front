import Auth from '../task/forms';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem } from 'reactstrap';
import Logo from './symbolBlack.png';
import React from 'react';

import './navbar.css';

export default class NavBar extends React.Component {
	constructor(props) {
		super(props);

		this.toggle = this.toggle.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.handleChange2 = this.handleChange2.bind(this);
		this.handleChange3 = this.handleChange3.bind(this);
		this.handleChange4 = this.handleChange4.bind(this);
		this.handleSignUp = this.handleSignUp.bind(this);
		this.handleLogin = this.handleLogin.bind(this);

		this.state = {
			value: 'ArtificialInterest',
			isOpen: false,
			Lemail: null,
			Lpassword: null,
			Spassword: null,
			Semail: null
		};
	}
	toggle() {
		this.setState({
			isOpen: !this.state.isOpen
		});
	}

	handleChange(event) {
		this.setState({ Semail: event.target.value });
	}
	handleChange2(event) {
		this.setState({ Spassword: event.target.value });
	}
	handleChange3(event) {
		this.setState({ Lemail: event.target.value });
	}
	handleChange4(event) {
		this.setState({ Lpassword: event.target.value });
	}

	handleSignUp(e) {
		let email = encodeURIComponent(this.state.Semail);
		let password = encodeURIComponent(this.state.Spassword);
		let bodyContent = 'email=' + email + '&password=' + password;

		fetch('http://localhost:3000/users/signup', {
			method: 'POST',
			body: bodyContent,
			headers: {
				'Content-type': 'application/x-www-form-urlencoded'
			}
		})
			.then(function(response) {
				if (response.ok) {
					console.log('Registration successful');
				} else {
					throw new Error('Oops! Something went wrong!');
				}
			})
			.catch(function(error) {
				console.log('Oops! Something went wrong, try again!');
			});
	}

	handleLogin(e) {
		let email = encodeURIComponent(this.state.Lemail);
		let password = encodeURIComponent(this.state.Lpassword);

		let bodyContent = 'email=' + email + '&password=' + password;

		fetch('http://localhost:3000/users/login', {
			method: 'POST',
			body: bodyContent,
			headers: {
				'Content-type': 'application/x-www-form-urlencoded'
			}
		})
			.then(function(response) {
				if (response.ok) {
					return response.json();
				}
				throw new Error('Network response was not ok.');
			})
			.then(function(result) {
				window.JWT = result.access_token;
			})
			.then(() => {
				this.props.fetchToDo();
			})
			.catch(function(error) {
				console.log('There has been a problem with your fetch operation: ', error.message);
			});
	}

	render() {
		return (
			<Navbar className="navbar" light expand="md" sticky="top">
				<NavbarBrand color="light" href="/" style={{ padding: '0 0 0 0 ' }}>
					<img src={Logo} style={{ height: '45px', margin: '0', opacity: '0.5' }} />
				</NavbarBrand>

				<NavbarToggler onClick={this.toggle} />
				<Collapse isOpen={this.state.isOpen} navbar>
					{/* <SearchBar onChange={this.handleChange}/> */}

					<Nav className="ml-auto" navbar>
						<NavItem>
							<Auth
								title={'SignUp'}
								handleChange1={this.handleChange}
								handleChange2={this.handleChange2}
								submit={this.handleSignUp}
							/>
						</NavItem>
						<NavItem>
							<Auth
								title={'Login'}
								handleChange1={this.handleChange3}
								handleChange2={this.handleChange4}
								submit={this.handleLogin}
							/>
						</NavItem>
					</Nav>
				</Collapse>
			</Navbar>
		);
	}
}
