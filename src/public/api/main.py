import wget
import zipfile
import pandas as pd
import os
from os import remove
import os.path as path

# ---- Borrar archivo CSV original filtrado - por si no se reescribe
if path.exists("covidFiltradoxMunicipio.csv"):
    remove("covidFiltradoxMunicipio.csv")

# ---- Descarga del archivo 
url = "http://187.191.75.115/gobmx/salud/datos_abiertos/datos_abiertos_covid19.zip"
wget.download(url, 'DatosJuquila.zip')

# ---- Descomprimir el archivo 
ruta_zip = "DatosJuquila.zip" #ruta de tu archivo
ruta_extraccion = os.getcwd() # tu ruta de extracción
archivo_zip = zipfile.ZipFile(ruta_zip, "r")
password=None
try:
    print(archivo_zip.namelist())
    archivo_zip.extractall(pwd=password, path=ruta_extraccion)
except ValueError as error:
    print("error",error)
f=str(archivo_zip.namelist()).strip('[]')
file= f[1:len(f)-1]

# ------------------- leer datos de tu archivo csv --------------------------------
# Leer archivo csv original
datos=pd.read_csv(file, header=0,encoding= 'unicode_escape')
#print(datos) 200728COVID19MEXICO.csv

# Ordenar datos por Municipio
datos.set_index('MUNICIPIO_RES', inplace=True)
# Filtrar datos por id de municipio
# juquila = 364
df=datos.loc[364]
#print(df)

# Guardar datos en CSV filtrados x Municipio
df.reset_index().to_csv('covidFiltradoxMunicipio.csv', header=True, index=False)


# ----- Eliminar archivos residuales

if path.exists(file):
    remove(file)

if path.exists("DatosJuquila.zip"):
    remove("DatosJuquila.zip")
