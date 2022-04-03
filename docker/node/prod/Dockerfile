FROM node:16.14-alpine
RUN mkdir -p /var/www/html/nuxt
# timezone
ARG TZ
WORKDIR /var/www/html/nuxt
COPY ./src/nuxt/ /var/www/html/nuxt/

RUN apk update && \
    apk upgrade

RUN yarn install

EXPOSE 3000

ENTRYPOINT ["yarn", "start"]