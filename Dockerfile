# Usa una imagen ligera de Nginx
FROM nginx:alpine

# Copia el archivo de configuración personalizado
COPY default.conf /etc/nginx/conf.d/default.conf

# Copia todos los archivos del sitio al directorio público de Nginx
COPY . /usr/share/nginx/html

EXPOSE 80
