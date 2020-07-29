rm /home/ubuntu/Workspace/EnlaceNode/src/public/covid/data.json
rm /home/ubuntu/Workspace/EnlaceNode/src/public/covid/covidFiltradoxMunucupio.csv
rm /home/ubuntu/Workspace/EnlaceNode/src/public/covid/covid.csv
cd /home/ubuntu/Workspace/EnlaceNode/src/public/covid && wget http://187.191.75.115/gobmx/salud/datos_abiertos/datos_abiertos_covid19.zip

cd /home/ubuntu/Workspace/EnlaceNode/src/public/covid && unzip *.zip
mv /home/ubuntu/Workspace/EnlaceNode/src/public/covid/******COVID19MEXICO.csv /home/ubuntu/Workspace/EnlaceNode/src/public/covid/covid.csv
rm /home/ubuntu/Workspace/EnlaceNode/src/public/covid/*.zip
python /home/ubuntu/Workspace/EnlaceNode/src/public/covid/main.py
pm2 restar 0