'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Esquema de datos para Leads

const LeadSchema = new Schema({
	nombre: String,
	apellido: String,
	rut: String,
	tel: [Number],
	cel: [Number],
	email: { type: String, unique: true, lowercase: true },
	region: String,
	dir: String,
	comment: { type: String, lowercase: true, trim: true },
	FechaCreacion: { type: Date, default: Date.now() },
	esCliente: Boolean,
	franja: { type: String, enum: ['blue', 'yellow', 'green'] },
	contactado: {type: Boolean, default: false},
	historial: {
		ultimoContacto: Date,
		log: [{
			fecha: Date,
			metodo: { type: String, enum: ['tel', 'cel', 'email'] },
			interesado: Boolean,
			yaCliente: Boolean,
			producto: {type: String, lowercase: true, trim: true },
			zanahoriaGen: Boolean
		}]
	}
})

module.exports = mongoose.model('Lead', LeadSchema);