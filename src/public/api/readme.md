## Actualización de datos

Sección donde se descarga la información del y se procesa.

#### Pasos a seguir
-------------------
* Instalar los archivos requeridos por python
    * ´´´ pip install -r requirements.txt´´´
* Descargar el archivo comprimido de
    * ´´´ sh download.sh ´´´
* Extraer el contenido del ZIP y renombrarlo a un nombre más corto
* Filtrar los datos solo de Juquila y guardarlos en un nuevo archivo CSV
* Eliminar los archivos generados que ya no se utilicen
* Pasar el archivo CSV a formato JSON
    * El archivo donload.sh se encargar de hacer todo lo anterior, solo hay que dejarlo ejecutandose en segundo plano

--------------------
Para dejar download en ejecución usar crontab

´´´
sudo crontab -e

00 20 * * *

´´´

