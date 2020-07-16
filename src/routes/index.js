const express = require('express');
const router = express.Router();


//res.sendFiles- enviar archivos como respuesta
router.get('/', (req, res) => {
    //Otorgamos title to the page dinámicmente
    //clase titulo
    res.render('index', { title: 'COVID-19' });
//Muestra la direccion en pantalla, evita error con win y linux
//console.log(path.join(__dirname, 'views/index.html'));
});

router.get('/acerca-de', (req, res) => {
    res.render('acerca-de', { title: 'Acerca de' });
});

router.get('/datos', (req, res) => {
    res.render('datos', { title: 'Datos' });
});

module.exports = router;
