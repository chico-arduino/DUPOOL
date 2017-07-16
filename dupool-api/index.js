'use strict'

const mongoose = require('mongoose')
const app = require('./app')

const port = 8000
const dbUrl = "mongodb://localhost:27017/dupool"

mongoose.connect(dbUrl, (err, res) => {
	if (err) {
		return console.log(`Error al intentar conectarse a la base de datos:
		${err}`)
	}

	console.log('Conexión con la base de datos establecida...');

	app.listen(port, () => {
		console.log(`API REST corriendo en http://localhost:${port}`);
	});
})

// app.listen(port, () => {
// 	console.log(`API REST corriendo en http://localhost:${port}`);
// });