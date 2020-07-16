const express = require('express');
const router = express.Router();


//res.sendFiles- enviar archivos como respuesta
router.get('/', (req, res) => {
    //Otorgamos title to the page dinámicmente
    //clase titulo
    res.render('index', { title: 'El Druida' });
//Muestra la direccion en pantalla, evita error con win y linux
//console.log(path.join(__dirname, 'views/index.html'));
});

router.get('/contact', (req, res) => {
    res.render('contact', { title: 'Contacto' });
});

router.get('/productos', (req, res) => {
    res.render('productos', { title: 'Productos' });
});

module.exports = router;