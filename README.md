# Calculador de nota final

## ¿Que es?

Calculador de nota final es un programa el cual se basa en ayudar a los estudiantes de las diferentes universidades en saber cuanto les falta para ganar la materia y asi saber cuanto deben sacar en su examen final.

## implementación

Se debe de clonar el repositorio:
1. Para esto abrimos git bash y utilizamos el comando “ git clone https://github.com/Cejaz/Final-Telematica.git ”
2. Se abre la carpeta del repositorio.
3. Abrimos la terminal como administrador y nos ubicamos dentro de la carpeta.
4. Una vez ubicados dentro de la carpeta creamos la imagen utilizando el comando “ docker build --pull --rm -f "DockerFile" -t nombrearchivo:latest "." < ”
5. Una vez terminado el proceso utilizamos el comando “ Docker images ” para ver el IMAGE ID de la imagen que se creó.
6. Utilizamos el comando “ docker run -d -p 80:80 [IMAGE ID] apachectl -D FOREGROUND ”.
7. Ahora solo queda poner localhost en el navegador.
