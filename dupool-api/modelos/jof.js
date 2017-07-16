'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const JofSchema = new Schema({
	nombre: String,
	apellido: String,
	rut: String,
	idBCI: String,
	leadsOwned: [ type: String, unique: true, lowercase: true ],
	duplas: [ type: String, unique: true, lowercase: true ]
})

modue.exports = mongoose.model('Jof', JofSchema)
