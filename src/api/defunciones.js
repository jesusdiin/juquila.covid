const { Router } = require('express');
const router = Router();

// DATA COVID
const fetch = require('node-fetch');

router.get('/', async (req, res) => {
	//const response = await fetch('https://www.juquila.info/api/v1/data');
    const response = await fetch('/api/v1/data');
    const dataCovid = await response.json();
	//console.log(dataCovid);
    //res.json(dataCovid);
    
    var defunciones = dataCovid.filter(item =>{
        return item.FECHA_DEF < '9999-99-99';
    });
    res.json(defunciones);
        //console.log("Casos de defunciones: " + Object.keys(defunciones).length);
            //defuncionesStr = JSON.stringify(Object.keys(defunciones).length);
                //var tblRow = "<span>" + defuncionesStr + "</span>"
                    //$(tblRow).appendTo("#printDefunciones");

});

module.exports = router;