const csvToJson = require("csvtojson");
const jsonToCSV = require("json2csv");
const fs = require("fs");




csvToJson().fromFile("covidFiltradoxMunucupio.csv").then(source =>{
       
      var filtroxMunicipio = source.filter(item =>{
          return item.MUNICIPIO_RES === '364';
        });
        filtroxMunicipioStr = JSON.stringify(filtroxMunicipio);
        fs.writeFile("data.json", filtroxMunicipioStr, function(err){
          if (err) {
            return console.log(err);
          }
          console.log("Archivo guardado");
        });
        console.log(filtroxMunicipio);
      



      var positivoxMunicipio = filtroxMunicipio.filter(item =>{
      return item.RESULTADO === '1';
      });

      var negativoxMunicipio = filtroxMunicipio.filter(item =>{
          return item.RESULTADO === '2';
          });

      var sospechosoxMunicipio = filtroxMunicipio.filter(item =>{
          return item.RESULTADO === '3';
          });
      //console.log(filtro);
    //console.log(filtro.indexOf('364'));
    //console.log("Total de datos: " + Object.keys(filtroxMunicipio).length);
    /*
    console.log("Casos positivos: " + Object.keys(positivoxMunicipio).length);
    console.log("Casos Negativos: " + Object.keys(negativoxMunicipio).length);
    console.log("Casos Sospechos: " + Object.keys(sospechosoxMunicipio).length);
    */
    
});


    //console.log(source);
    //return source;
/*
    var datos = function(){
      this.agua = agua="h20";
    }
    datos();
    console.log(agua);*/
/*
**** RESULTADO ****
    - 1 = POSITIO
    - 2 = NEGATIVO
    - 3 = SOSPECHOSO


*/

//console.log(filtro)


