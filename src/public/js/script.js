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
				return item.RESULTADO_LAB === '1';
			});
				console.log("Casos Positivos: " + Object.keys(positivoxMunicipio).length);
					casosPositivosStr=JSON.stringify(Object.keys(positivoxMunicipio).length);
						var tblRow = "<span>" + casosPositivosStr + "</span>"
							$(tblRow).appendTo("#printCasosPositivos");
			
			// Funtion casos negativos x Municipio
			var negativoxMunicipio = data.filter(item =>{
				return item.RESULTADO_LAB === '2';
			});
				console.log("Casos Negativos: " + Object.keys(negativoxMunicipio).length);
					casosNegativosStr = JSON.stringify(Object.keys(negativoxMunicipio).length);
						var tblRow = "<span>" + casosNegativosStr + "</span>"
							$(tblRow).appendTo("#printCasosNegativos");

			// Funtion casos sospechosos x Municipio
			var sospechosoxMunicipio = data.filter(item =>{
				return item.RESULTADO_LAB === '3';
			});
				console.log("Casos sospechosos: " + Object.keys(sospechosoxMunicipio).length);
					casosSospechososStr = JSON.stringify(Object.keys(sospechosoxMunicipio).length);
						var tblRow = "<span>" + casosSospechososStr + "</span>"
							$(tblRow).appendTo("#printCasosSospechosos");

			// Funtion casos de defunciones x Municipio
			var defunciones = positivoxMunicipio.filter(item =>{
				return item.FECHA_DEF !== '9999-99-99';
			});
			console.log(defunciones)
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

/* ************ S E C C I Ó N   A P I ************** */
/* --------- MOSTRAR CÓDIGO PARA HACER GET --------- */

// - Activa el botón desplegable
document.addEventListener('DOMContentLoaded', function() {
	var elems = document.querySelectorAll('.dropdown-trigger');
	var instances = M.Dropdown.init(elems);
});

// - Código GET - DATA

function getDataJS() {
	getData.innerHTML = `
	<iframe
  src="https://carbon.now.sh/embed?bg=rgba(171%2C184%2C195%2C0)&t=seti&wt=none&l=javascript&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=false&pv=0px&ph=0px&ln=true&fl=1&fm=Hack&fs=13.5px&lh=142%25&si=false&es=2x&wm=false&code=var%2520requestOptions%2520%253D%2520%257B%250A%2520%2520method%253A%2520%27GET%27%252C%250A%2520%2520redirect%253A%2520%27follow%27%252C%250A%257D%250A%250Afetch(%27https%253A%252F%252Fwww.juquila.info%252Fapi%252Fv1%252Fdata%27%252C%2520requestOptions)%250A%2520%2520.then((response)%2520%253D%253E%2520response.text())%250A%2520%2520.then((result)%2520%253D%253E%2520console.log(result))%250A%2520%2520.catch((error)%2520%253D%253E%2520console.log(%27error%27%252C%2520error))"
  style="width: 100%; height: 321px; border:0; transform: scale(1); overflow:hidden;"
  sandbox="allow-scripts allow-same-origin">
</iframe>
	`
}

function getDATAPython() {
	getData.innerHTML = `
	<iframe
  src="https://carbon.now.sh/embed?bg=rgba(171%2C184%2C195%2C0)&t=seti&wt=none&l=javascript&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=false&pv=0px&ph=0px&ln=true&fl=1&fm=Hack&fs=13.5px&lh=142%25&si=false&es=2x&wm=false&code=import%2520http.client%250Aimport%2520mimetypes%250Aconn%2520%253D%2520http.client.HTTPSConnection(%2522www.juquila.info%2522)%250Apayload%2520%253D%2520%27%27%250Aheaders%2520%253D%2520%257B%257D%250Aconn.request(%2522GET%2522%252C%2520%2522%252Fapi%252Fv1%252Fdata%2522%252C%2520payload%252C%2520headers)%250Ares%2520%253D%2520conn.getresponse()%250Adata%2520%253D%2520res.read()%250Aprint(data.decode(%2522utf-8%2522))"
  style="width: 100%; height: 321px; border:0; transform: scale(1); overflow:hidden;"
  sandbox="allow-scripts allow-same-origin">
</iframe>
	`
}

// - Código GET - POSITIVOS

function getDataPositivosJs() {
	getDataPositivos.innerHTML = `
	<iframe
  src="https://carbon.now.sh/embed?bg=rgba(171%2C184%2C195%2C0)&t=seti&wt=none&l=javascript&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=false&pv=0px&ph=0px&ln=true&fl=1&fm=Hack&fs=13.5px&lh=142%25&si=false&es=2x&wm=false&code=var%2520requestOptions%2520%253D%2520%257B%250A%2520%2520method%253A%2520%27GET%27%252C%250A%2520%2520redirect%253A%2520%27follow%27%252C%250A%257D%250A%250Afetch(%27https%253A%252F%252Fwww.juquila.info%252Fapi%252Fv1%252Fdata%252Fpositivos%27%252C%2520requestOptions)%250A%2520%2520.then((response)%2520%253D%253E%2520response.text())%250A%2520%2520.then((result)%2520%253D%253E%2520console.log(result))%250A%2520%2520.catch((error)%2520%253D%253E%2520console.log(%27error%27%252C%2520error))"
  style="width: 100%; height: 321px; border:0; transform: scale(1); overflow:hidden;"
  sandbox="allow-scripts allow-same-origin">
</iframe>
	`
}

function getDataPositivosPython() {
	getDataPositivos.innerHTML = `
	<iframe
	src="https://carbon.now.sh/embed?bg=rgba(171%2C184%2C195%2C0)&t=seti&wt=none&l=javascript&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=false&pv=0px&ph=0px&ln=true&fl=1&fm=Hack&fs=13.5px&lh=142%25&si=false&es=2x&wm=false&code=import%2520http.client%250Aimport%2520mimetypes%250Aconn%2520%253D%2520http.client.HTTPSConnection(%2522www.juquila.info%2522)%250Apayload%2520%253D%2520%27%27%250Aheaders%2520%253D%2520%257B%257D%250Aconn.request(%2522GET%2522%252C%2520%2522%252Fapi%252Fv1%252Fdata%252Fpositivos%2522%252C%2520payload%252C%2520headers)%250Ares%2520%253D%2520conn.getresponse()%250Adata%2520%253D%2520res.read()%250Aprint(data.decode(%2522utf-8%2522))"
	style="width: 100%; height: 321px; border:0; transform: scale(1); overflow:hidden;"
	sandbox="allow-scripts allow-same-origin">
  </iframe>
	`
}
// - Código GET - NEGATIVOS

function getDataNegativosJs() {
	getDataNegativos.innerHTML = `
	<iframe
  src="https://carbon.now.sh/embed?bg=rgba(171%2C184%2C195%2C0)&t=seti&wt=none&l=javascript&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=false&pv=0px&ph=0px&ln=true&fl=1&fm=Hack&fs=13.5px&lh=142%25&si=false&es=2x&wm=false&code=var%2520requestOptions%2520%253D%2520%257B%250A%2520%2520method%253A%2520%27GET%27%252C%250A%2520%2520redirect%253A%2520%27follow%27%252C%250A%257D%250A%250Afetch(%27https%253A%252F%252Fwww.juquila.info%252Fapi%252Fv1%252Fdata%252Fnegativos%27%252C%2520requestOptions)%250A%2520%2520.then((response)%2520%253D%253E%2520response.text())%250A%2520%2520.then((result)%2520%253D%253E%2520console.log(result))%250A%2520%2520.catch((error)%2520%253D%253E%2520console.log(%27error%27%252C%2520error))"
  style="width: 100%; height: 340px; border:0; transform: scale(1); overflow:hidden;"
  sandbox="allow-scripts allow-same-origin">
</iframe>
	`
}

function getDataNegativosPython() {
	getDataNegativos.innerHTML = `
	<iframe
  src="https://carbon.now.sh/embed?bg=rgba(171%2C184%2C195%2C0)&t=seti&wt=none&l=javascript&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=false&pv=0px&ph=0px&ln=true&fl=1&fm=Hack&fs=13.5px&lh=142%25&si=false&es=2x&wm=false&code=import%2520http.client%250Aimport%2520mimetypes%250Aconn%2520%253D%2520http.client.HTTPSConnection(%2522www.juquila.info%2522)%250Apayload%2520%253D%2520%27%27%250Aheaders%2520%253D%2520%257B%257D%250Aconn.request(%2522GET%2522%252C%2520%2522%252Fapi%252Fv1%252Fdata%252Fnegativos%2522%252C%2520payload%252C%2520headers)%250Ares%2520%253D%2520conn.getresponse()%250Adata%2520%253D%2520res.read()%250Aprint(data.decode(%2522utf-8%2522))"
  style="width: 100%; height: 321px; border:0; transform: scale(1); overflow:hidden;"
  sandbox="allow-scripts allow-same-origin">
</iframe>
	`
}

// - Código GET - SOSPECHOSOS

function getDataSospechososJs() {
	getDataSospechosos.innerHTML = `
	<iframe
  src="https://carbon.now.sh/embed?bg=rgba(171%2C184%2C195%2C0)&t=seti&wt=none&l=javascript&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=false&pv=0px&ph=0px&ln=true&fl=1&fm=Hack&fs=13.5px&lh=142%25&si=false&es=2x&wm=false&code=var%2520requestOptions%2520%253D%2520%257B%250A%2520%2520method%253A%2520%27GET%27%252C%250A%2520%2520redirect%253A%2520%27follow%27%252C%250A%257D%250A%250Afetch(%27https%253A%252F%252Fwww.juquila.info%252Fapi%252Fv1%252Fdata%252Fsospechosos%27%252C%2520requestOptions)%250A%2520%2520.then((response)%2520%253D%253E%2520response.text())%250A%2520%2520.then((result)%2520%253D%253E%2520console.log(result))%250A%2520%2520.catch((error)%2520%253D%253E%2520console.log(%27error%27%252C%2520error))"
  style="width: 100%; height: 340px; border:0; transform: scale(1); overflow:hidden;"
  sandbox="allow-scripts allow-same-origin">
</iframe>
	`
}

function getDataSospechososPython() {
	getDataSospechosos.innerHTML = `
	<iframe
  src="https://carbon.now.sh/embed?bg=rgba(171%2C184%2C195%2C0)&t=seti&wt=none&l=javascript&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=false&pv=0px&ph=0px&ln=true&fl=1&fm=Hack&fs=13.5px&lh=142%25&si=false&es=2x&wm=false&code=import%2520http.client%250Aimport%2520mimetypes%250Aconn%2520%253D%2520http.client.HTTPSConnection(%2522www.juquila.info%2522)%250Apayload%2520%253D%2520%27%27%250Aheaders%2520%253D%2520%257B%257D%250Aconn.request(%2522GET%2522%252C%2520%2522%252Fapi%252Fv1%252Fdata%252Fsospechosos%2522%252C%2520payload%252C%2520headers)%250Ares%2520%253D%2520conn.getresponse()%250Adata%2520%253D%2520res.read()%250Aprint(data.decode(%2522utf-8%2522))"
  style="width: 100%; height: 321px; border:0; transform: scale(1); overflow:hidden;"
  sandbox="allow-scripts allow-same-origin">
</iframe>
	`
}

// - Código GET - DEFUNCIONES

function getDataDefuncionesJs() {
	getDataDefunciones.innerHTML = `
	<iframe
  src="https://carbon.now.sh/embed?bg=rgba(171%2C184%2C195%2C0)&t=seti&wt=none&l=javascript&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=false&pv=0px&ph=0px&ln=true&fl=1&fm=Hack&fs=13.5px&lh=142%25&si=false&es=2x&wm=false&code=var%2520requestOptions%2520%253D%2520%257B%250A%2520%2520method%253A%2520%27GET%27%252C%250A%2520%2520redirect%253A%2520%27follow%27%252C%250A%257D%250A%250Afetch(%27https%253A%252F%252Fwww.juquila.info%252Fapi%252Fv1%252Fdata%252Fdefunciones%27%252C%2520requestOptions)%250A%2520%2520.then((response)%2520%253D%253E%2520response.text())%250A%2520%2520.then((result)%2520%253D%253E%2520console.log(result))%250A%2520%2520.catch((error)%2520%253D%253E%2520console.log(%27error%27%252C%2520error))"
  style="width: 100%; height: 340px; border:0; transform: scale(1); overflow:hidden;"
  sandbox="allow-scripts allow-same-origin">
</iframe>
	`
}

function getDataDefuncionesPython() {
	getDataDefunciones.innerHTML = `
	<iframe
	src="https://carbon.now.sh/embed?bg=rgba(171%2C184%2C195%2C0)&t=seti&wt=none&l=javascript&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=false&pv=0px&ph=0px&ln=true&fl=1&fm=Hack&fs=13.5px&lh=142%25&si=false&es=2x&wm=false&code=import%2520http.client%250Aimport%2520mimetypes%250Aconn%2520%253D%2520http.client.HTTPSConnection(%2522www.juquila.info%2522)%250Apayload%2520%253D%2520%27%27%250Aheaders%2520%253D%2520%257B%257D%250Aconn.request(%2522GET%2522%252C%2520%2522%252Fapi%252Fv1%252Fdata%252Fdefunciones%2522%252C%2520payload%252C%2520headers)%250Ares%2520%253D%2520conn.getresponse()%250Adata%2520%253D%2520res.read()%250Aprint(data.decode(%2522utf-8%2522))"
	style="width: 100%; height: 321px; border:0; transform: scale(1); overflow:hidden;"
	sandbox="allow-scripts allow-same-origin">
  </iframe>
	`
}