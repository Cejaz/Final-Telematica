# Calculador de nota final

## ¿Que es?

Calculador de nota final es un programa el cual se basa en ayudar a los estudiantes de las diferentes universidades en saber cuanto les falta para ganar la materia y asi saber cuanto deben sacar en su examen final.

## implementación

Se debe de clonar el repositorio:
Para esto utilizamos el comando “ git clone https://github.com/Cejaz/Final-Telematica.git ”
Se abre la carpeta del repositorio.
Abrimos la terminal como administrador y nos ubicamos dentro de la carpeta.
Una vez ubicados dentro de la carpeta creamos la imagen utilizando el comando “ docker build --pull --rm -f "DockerFile" -t nombrearchivo:latest "." < ”
Una vez terminado el proceso utilizamos el comando “ Docker images ” para ver el IMAGE ID de la imagen que se creó.
Utilizamos el comando “ docker run -d -p 80:80 [IMAGE ID] apachectl -D FOREGROUND ”.
Ahora solo queda poner localhost en el navegador.
