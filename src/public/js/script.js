
//fetch("http://10.42.0.1:8080/api/v1/data")
fetch("https://juquila-covid.herokuapp.com/api/v1/data")
	.then(function(resp){
			return resp.json();
	})


		.then(function(data){
			//console.log(data);
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
			
			
		});
