FROM alpine:3.6

RUN apk add --update \
    curl \
    bash \
    nodejs-current \
    nodejs-npm

EXPOSE 3301

WORKDIR /app

COPY . .

RUN npm install

CMD npm run start