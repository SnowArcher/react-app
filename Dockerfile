# STAGE 1
FROM node:lts-alpine3.16 AS build
WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build

# STAGE 2
FROM nginx:1.17.1-alpine
COPY --from=build /usr/src/app/proxy/nginx/nginx.conf /etc/nginx/nginx.conf
COPY --from=build /usr/src/app/build/ /usr/share/nginx/html
