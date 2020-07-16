//REquiero modulo express
const express = require('express');
//Lo ejecutamos en una constante
const app = express();
//Modulo para directorios
const path = require('path');

//Settings
//puerto en ejecucuion
app.set('port', 80);
//DEclaramos la ruta src para usarlos con render
app.set('views', path.join(__dirname, 'views'));

//Motor de plantillas, evitamos el sendFile, cambiamos "index.html" por "index.ejs"
app.set('view engine', 'ejs');


// MIddlewares-Permisos url para el cliente


//Rutas del servidor
app.use(require('./routes/index'));


// Archivos estaticos
// Archivos publicos accedidos desde el navegador -img, videos, pdf, etc
app.use(express.static(path.join(__dirname, 'public')));



//la llamamos en un puerto especifico
app.listen(app.get('port'), () => {
	console.log('Server on port', app.get('port'));
});

//app.use('/public',express.static(path.join(__dirname, '../public')));
