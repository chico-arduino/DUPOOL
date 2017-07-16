'use strict';

const express = require("express")
const api = express.Router()
const bodyParser = require('body-parser')
const path = require('path')

const app = express()

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

// Ruta base para interacción con la API
app.use('/api', api)

// Llamado a Controladores
const leadCtrl = require('./controladores/leads')

/*
>>>>>>>>>> RUTAS
*/

// Ruta para petición de todas los leads
api.get('/leads', leadCtrl.mostrarLeads)

// Ruta para cargar lead
api.post('/leads', leadCtrl.cargarLead)

// Ruta para actualizar lead
api.put('/leads/:leadID', leadCtrl.editarLead)

// Ruta para borrar lead
api.delete('/leads/:leadID', leadCtrl.borrarLead)


api.get('/', (req, res) => {
	console.log('GET /')
	res.status(200).send({ message: 'ok'})
})

module.exports = app;