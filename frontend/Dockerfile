FROM node:16-alpine as builder

COPY . /opt/app/

WORKDIR /opt/app/

RUN npm install
RUN npm run build

FROM node:16-alpine as webapp

COPY --from=builder /opt/app/dist /opt/app

WORKDIR /opt/app

RUN npm install -g serve

CMD ["serve", "."]














