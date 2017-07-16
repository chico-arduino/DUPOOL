document.addEventListener('DOMContentLoaded', () => {
	const leadCardContent = `<div class="lead-card ">
            		<h3><span data-lead-name="Nuevo Lead"></span></h3>
            		<form id="cargar-lead-1">
            			<div class="row">
            				<div class="col-sm-6">
            					<div class="form-group">
            						<label for="nombreCliente">Nombre</label>
            						<input type="text" class="form-control" id="nombreCliente" placeholder="Nombre del cliente">
            					</div>                
            				</div>
            				<div class="col-sm-6">
            					<div class="form-group">
            						<label for="apellidoCliente">Apellido</label>
            						<input type="text" class="form-control" id="apellidoCliente" placeholder="Apellido del cliente">
            					</div>                
            				</div>
            				<div class="col-sm-3">
            					<div class="form-group">
            						<label for="rutCliente">RUT</label>
            						<input type="text" class="form-control" id="rutCliente" placeholder="Número de RUT">
            					</div>                
            				</div>
            				<div class="col-sm-3">
            					<div class="form-group">
            						<label for="emailCliente">Email</label>
            						<input type="email" class="form-control" id="emailCliente" placeholder="mailcliente@email.com">
            					</div>                
            				</div>
            				<div class="col-sm-3">
            					<div class="form-group">
            						<label for="tlfCliente">Teléfono</label>
            						<input type="tel" class="form-control" id="tlfCliente" placeholder="Teléfono cliente">
            					</div>                
            				</div>
            				<div class="col-sm-3">
            					<div class="form-group">
            						<label for="celCliente">Celular</label>
            						<input type="tel" class="form-control" id="celCliente" placeholder="Celular cliente">
            					</div>                
            				</div>

            				<div class="col-xs-12">
            					<div class="form-group">
            						<label for="direccionCliente">Dirección</label>
            						<input type="text" class="form-control" id="direccionCliente" placeholder="Dirección del cliente">
            					</div>                
            				</div>

            				<div class="col-sm-6">
            					<div class="form-group">
            						<label for="regionCliente">Región</label>
            						<input type="text" class="form-control" id="regionCliente" placeholder="Región">
            					</div>                
            				</div>
            				<div class="col-sm-6">
            					<div class="form-group">
            						<label for="comunaCliente">Comuna</label>
            						<input type="text" class="form-control" id="comunaCliente" placeholder="Comuna">
            					</div>                
            				</div>

            				<div class="col-xs-12 text-right">
            					<button type="submit" class="btn btn-primary alin-derecha">Registrar</button>
            				</div>
            			</div>
            		</form>
            	</div>`

            	console.log('HTML del lead Card', leadCardContent)

            	const contenedor = document.getElementById('card-cont')

            	
})