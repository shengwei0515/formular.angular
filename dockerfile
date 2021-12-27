FROM node:lts-alpine3.13 as builder
WORKDIR /app
COPY ./formular ./
RUN npm install 
RUN npm run build --output-path=./dist/frontend --prod

FROM nginx:alpine
COPY --from=builder /app/dist/frontend /usr/share/nginx/html