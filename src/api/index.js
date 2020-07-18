const { Router } = require('express');
const router = Router();

// DATA COVID
const fetch = require('node-fetch');

router.get('/', async (req, res) => {
	//const response = await fetch('http://34.206.10.91/covid/api/v1/data');
	const response = await fetch('http://localhost/covid/api/v1/data');
	const dataCovid = await response.json();
	console.log(dataCovid);
	res.json(dataCovid);
});

module.exports = router;