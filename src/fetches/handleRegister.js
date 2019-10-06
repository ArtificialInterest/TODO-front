export const handleRegister = (emailInput, passwordInput) => {
	let email = encodeURIComponent(emailInput);
	let password = encodeURIComponent(passwordInput);
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
};
