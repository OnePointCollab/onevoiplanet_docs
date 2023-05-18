FROM node:18-alpine as builder

WORKDIR /app

COPY . .

RUN npm install -g npm@8.13.2 && \
    npm install  && \
    npm run build

FROM nginx:1.23.4-alpine

COPY --from=builder /app/build /usr/share/nginx/html

COPY nginx/default.conf /etc/nginx/conf.d/default.conf


EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]