import pandas as pd

# Leer archivo csv original
datos=pd.read_csv('covid.csv', header=0)
#print(datos)

# Ordenar datos por Municipio
datos.set_index('MUNICIPIO_RES', inplace=True)

# Filtrar datos por id de municipio
# juquila = 364
df=datos.loc[364]
#print(df)

# Guardar datos en CSV filtrados x Municipio
df.reset_index().to_csv('covidFiltradoxMunucupio.csv', header=True, index=False)