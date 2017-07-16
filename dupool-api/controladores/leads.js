'use strict'

// Modelos
const Ejem = require('../modelos/ejem')
const Lead = require('../modelos/lead')

// Carga de leads
function cargarLead (req, res) {
	console.log('Cargando Lead')
	let lead = new Lead()

	lead.nombre = req.body.nombre
	lead.apellido = req.body.apellido
	lead.rut = req.body.rut
	lead.tel.push(req.body.tel)
	lead.cel.push(req.body.cel)
	lead.email = req.body.email
	lead.region = req.body.region
	lead.dir = req.body.dir
	lead.comment = req.body.comment

	lead.save((err, leadCargada) => {
		if (err) res.status(500)
			.send({
				mensaje: `Ocurrió un error interno: ${err}`
			})

		res.status(200).send('<span><strong>Referido cargado con exito</strong></span>')
	})	
}

// Entregar todos los Leads
function mostrarLeads (req, res) {
	console.log('Entragando todos los Leads')

	Lead.find({}, (err, leads) => {
		if (err) res.status(500)
			.send({
				mensaje: `Ocurrió un error interno: ${err}`
			})

		if(!leads) return res.status(404).send({ mensaje: 'No hay leads que mostrar' })

		res.status(200).send({ leads })
	})
}

// Editar lead
function editarLead(req, res) {
	console.log('Editando lead')

	let leadID = req.params.leadID
	let actualizacion = req.body

	Lead.findByIdAndUpdate(leadId, actualizacion, (err, leadActualizado) => {
		if (err) res.status(500).send({
			mensaje: `Ha ocurrido un error interno ${err}`
		})

		res.status(200).send({ lead: leadActualizado })
	})
}

// Borrado de lead
function borrarLead(req, res) {
	console.log('Borrando lead')

	let leadID = req.params.leadID

	Lead.findById(leadID, (err, lead) => {
		if (err) res.status(500).send({
			mensaje: `Ha ocurrido un error interno ${err}`
		})

		lead.remove(err => {
			if (err) res.status(500).send({ mensaje: `Ha ocurrido un error interno ${err}` })
			res.status(200).send({ mensaje: 'Lead borrado con exito' })
		})
	})
}


module.exports = {
	cargarLead,
	mostrarLeads,
	editarLead,
	borrarLead
}