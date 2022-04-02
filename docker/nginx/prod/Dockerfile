FROM nginx:1.18-alpine

ENV TZ=UTC

# nginx config file
COPY ./docker/nginx/*.conf /etc/nginx/conf.d/
COPY ./src /var/www/html

WORKDIR /var/www/html