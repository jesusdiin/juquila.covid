const { Router } = require('express');
const router = Router();

// DATA COVID
const fetch = require('node-fetch');

router.get('/', async (req, res) => {
	const response = await fetch('http://34.206.10.91/covid/api/v1/data');
	//const response = await fetch('http://localhost/covid/api/v1/data');
	const dataCovid = await response.json();
	console.log(dataCovid);
	res.json(dataCovid);
});

router.get('/total', async (req, res) => {
	const response = await fetch('https://www.juquila.info/api/v1/data');
	//const response = await fetch('http://localhost:8080/api/v1/data');
	const dataCovid = await response.json();
			res.json(dataCovid.length);
			//res.json(positivoxMunicipio.id)
});

router.get('/44', async (req, res) => {
			res.json("Error");
});

router.post('/*', async (req, res) => {
	res.json("Acceso denegado");
});

module.exports = router;