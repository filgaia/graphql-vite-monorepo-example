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

- `https://graphql.org/community/tools-and-libraries/`