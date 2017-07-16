'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Esquema de datos para Ejecutivo de Empresas

const EjemSchema = new Schema({
	nombre: String,
	apellido: String,
	rut: String,
	idBCI: String,
	leads: { type: String, unique: true, lowercase: true },
	zanahorias: [{
		leadId: { type: String, unique: true, lowercase: true },
		leadGenZan: { type: String, unique: true, lowercase: true },
		historial: [{
			fecha: Date,
			leadGenZan: { type: String, unique: true, lowercase: true }
		}]
	}]	
})

module.exports = mongoose.model('Ejem', EjemSchema)