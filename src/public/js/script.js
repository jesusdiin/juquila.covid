

    const data = 'http://34.206.10.91/public/covid/data.json';
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

    
