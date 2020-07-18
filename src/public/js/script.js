/*
let url = 'http://localhost/covid/api/v1/data';

fetch(url)
.then(res => res.json())
.then((out) => {
  console.log('json', out);
})
.catch(err => { throw err });
*/
/*
    fetch("http://localhost/covid/api/v1/data")
    
    .then(function(resp){
        return resp.json();
    })
    .then(function(data){
        console.log(data);
        var positivoxMunicipio = data.filter(item =>{
      return item.RESULTADO === '1';
      });

      console.log(positivoxMunicipio);
      console.log("Total de datos: " + Object.keys(positivoxMunicipio).length);
      sr=JSON.stringify(Object.keys(positivoxMunicipio).length);

      var tblRow = "<span>" + sr + "</span>"
                    $(tblRow).appendTo("#casosPositivos");
      
    });
/*