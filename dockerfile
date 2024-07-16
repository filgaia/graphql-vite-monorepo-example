FROM node:20.10.0 AS client

RUN mkdir -p /usr/mono
RUN chmod -R 777 /usr/mono
WORKDIR /usr/mono

COPY . ./
RUN npm i

EXPOSE 5173 4000 3000
CMD ["npm","run","dev","--host"]
