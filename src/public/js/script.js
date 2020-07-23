


fetch("/api/v1/data")
//fetch("https://www.juquila.info/api/v1/data")
//fetch("http://10.42.0.1:8080/public/js/moment.min.js")
	.then(function(resp){
			return resp.json();
	})


		.then(function(data){
			//console.log(data);

			// --- Fecha actualización
			const findFecha = data.find(item => {
				return item.FECHA_ACTUALIZACION > '1'
			});
			const fechaActualizacion = findFecha.FECHA_ACTUALIZACION
			console.log('Fecha de actualización: ' + fechaActualizacion);
			fechaActualizacionStr=JSON.stringify(Object.keys(fechaActualizacion));
				var tblRow = "<span>" + fechaActualizacion + "</span>"
					$(tblRow).appendTo("#fechaActualizacion");
			

			// --- Total de datos analizados
			console.log("Total de datos analizados: " + Object.keys(data).length);
			totalDatosStr=JSON.stringify(Object.keys(data).length);
				var tblRow = "<span>" + totalDatosStr + "</span>"
					$(tblRow).appendTo("#printTotalDatosAnalizados");

			/**** RESULTADO CASOS ****
				- 1 = POSITIVO
				- 2 = NEGATIVO
				- 3 = SOSPECHOSO
			*/
			// Funcion datos positivos x municipio
			var positivoxMunicipio = data.filter(item =>{
				return item.RESULTADO === '1';
			});
				console.log("Casos Positivos: " + Object.keys(positivoxMunicipio).length);
					casosPositivosStr=JSON.stringify(Object.keys(positivoxMunicipio).length);
						var tblRow = "<span>" + casosPositivosStr + "</span>"
							$(tblRow).appendTo("#printCasosPositivos");
			
			// Funtion casos negativos x Municipio
			var negativoxMunicipio = data.filter(item =>{
				return item.RESULTADO === '2';
			});
				console.log("Casos Negativos: " + Object.keys(negativoxMunicipio).length);
					casosNegativosStr = JSON.stringify(Object.keys(negativoxMunicipio).length);
						var tblRow = "<span>" + casosNegativosStr + "</span>"
							$(tblRow).appendTo("#printCasosNegativos");

			// Funtion casos sospechosos x Municipio
			var sospechosoxMunicipio = data.filter(item =>{
				return item.RESULTADO === '3';
			});
				console.log("Casos sospechosos: " + Object.keys(sospechosoxMunicipio).length);
					casosSospechososStr = JSON.stringify(Object.keys(sospechosoxMunicipio).length);
						var tblRow = "<span>" + casosSospechososStr + "</span>"
							$(tblRow).appendTo("#printCasosSospechosos");

			// Funtion casos de defunciones x Municipio
			var defunciones = data.filter(item =>{
				return item.FECHA_DEF < '9999-99-99';
			});
				console.log("Casos de defunciones: " + Object.keys(defunciones).length);
					defuncionesStr = JSON.stringify(Object.keys(defunciones).length);
						var tblRow = "<span>" + defuncionesStr + "</span>"
							$(tblRow).appendTo("#printDefunciones");
			

			// --- Activos
			var activos = positivoxMunicipio.filter(item =>{
					return item.FECHA_SINTOMAS < '9999-99-99'
			});
			const fechaaa = activos.FECHA_SINTOMAS;
			console.log(activos);

			//const fechaActualizacion = findFecha.FECHA_ACTUALIZACION
			//console.log('Fecha de actualización: ' + fechaActualizacion);
			//console.log(moment().format('YYYY MM DD'))


			// ---- Mostrar datos a detalle 
			//var aDettalle = document.querySelector(#dAdetalle);
			this.detalle = detalle =>{
				//console.log(positivoxMunicipio);
				fTabla(positivoxMunicipio);
			}
			 function fTabla(positivoxMunicipio){
				//console.log(positivoxMunicipio);
				//datosAdetalle.innerHTML = 'hi'
				for(let aDetalleValor of positivoxMunicipio){
					console.log('ID: ' + aDetalleValor.ID_REGISTRO);
					/*
						VARIABLE SEXO
						- 1 = Femenino
						- 2 = Masculino
					*/
					var sexo = aDetalleValor.SEXO;
					var fechaDefuncion = aDetalleValor.FECHA_DEF;
					datosAdetalle.innerHTML += `
						<tr>
							<td>${aDetalleValor.ID_REGISTRO}</td>
							<td>${aDetalleValor.EDAD + ' años'}</td>
							<td>${sexo < 2 ? "Femenino" : "Masculino"}</td>
							<td>${aDetalleValor.FECHA_SINTOMAS}</td>
							<!--<td>${aDetalleValor.FECHA_INGRESO}</td>-->
							<td>${fechaDefuncion >= '9999-99-99' ? "No Aplica" : fechaDefuncion }</td>
						</tr>
					`
					
				}
			 }
			
			
			
		});
		console.log(detalle);

		function ocultar(){
			datosAdetalle.innerHTML= '';
		}
