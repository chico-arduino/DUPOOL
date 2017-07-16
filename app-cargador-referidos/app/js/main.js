document.addEventListener('DOMContentLoaded', () => {

	const formLogin = document.querySelector('#cargador-lead')

	formLogin.addEventListener('submit', (event) => {
		event.preventDefault()
		
		let inputs = document.querySelectorAll('input'),
			encodedBody = new URLSearchParams();

		// inputs.map((input) => {
		// 	if (input.type != 'submit' ) {
		// 		encodedBody.append(input.name.trim(), input.value.trim())
		// 	}
		// })

		for (let i = 0;  i < inputs.length; i++) {
			if (inputs[i].type != 'submit' ) {
				encodedBody.append(inputs[i].name.trim(), inputs[i].value.trim())
			}
		};

		fetch('http://localhost:3001/api/leads', {
			method: 'POST',
		  headers: {
		    "content-type": "application/x-www-form-urlencoded"
		  },
			body: encodedBody,
			mode: 'no-cors',
			cache: 'default'
		})
		.then(res => res.json())
		.then(data => {
			console.log('data', data)
		})	
	});
})