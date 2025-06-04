# form-de-registro
Es un proyecto de un formulario de registro básico. Este proyecto se puede desplegar desde un contenedor docker, por ello cuenta con un archivo Dockerfile y un archivo de configuración de un servidor web NGINX.

## Paso a paso para su descarga y prueba
Este proyecto está integrado con contenedores Docker para facilitar su despliegue y hacer uso de esta tecnología muy demandada. 

Clonar el repositorio:
git clone https://github.com/dsmartest/form-de-registro.git
cd form-de-registro

Desplegar el contenedor:
docker build -t <nombre-de-la-imagen-a-crear> . # Crear la imagen y dar un nombre a la imagen a partir del contenido del directorio actual.
docker run -d -p 8080:80 --name <nombre-del-app-o-contenedor> <nombre-de-la-imagen-a-crear> # Desplegar el contenedor con nombre "<nombre-del-app-o-contenedor>" a partir de la imagen <nombre-de-la-imagen-a-crear>

Visualizar el proyecto:
abrir en un navegador http://localhost:8080
