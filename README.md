# POC of How to run a Graphql Server and consume it on client

## How to run it

### Backend

- `npm run dev:backend`

### Frontend

We have multiple run options:

- `npm run dev:fe-vite`
- `npm run dev:fe-next`

### Docker

- `docker compose up -d --force-recreate mono --build`

### Access:

#### Graphiql

- `http://localhost:4000/`

#### Vite

- `http://localhost:5173`

#### Next

- Apollo Explorer: `http://localhost:3000/api/graphql`
- Client: `http://localhost:3000`

## Docs

- [Tools and Libraries](https://graphql.org/community/tools-and-libraries/)
- [TSConfig](https://www.typescriptlang.org/tsconfig)
- [Getting Started: Apollo Server](https://www.apollographql.com/docs/apollo-server/getting-started/)
- [Vite Guide](https://vitejs.dev/guide/)

## How to create this POC Step by Step

### Backend

```terminal
mkdir backend
npm init --yes && npm pkg set type="module"
npm i --save @apollo/server graphql
mkdir src
touch src/index.ts
npm i --save-dev typescript @types/node
touch tsconfig.json
```

### Frontend

```terminal
npm create vite frontend --template react-ts
npm i --save graphql-hooks graphql
```