import express from "express";
import { createHandler } from "graphql-http/lib/use/express";
import { ruruHTML } from "ruru/server";
import cors from "cors";

import { schema } from "./schema/typeDefs";
import { root } from "./schema/resolvers";
 
const app = express();
 
// Allow cors
app.use(cors());

// Create and use the GraphQL handler.
app.all(
  "/graphql",
  createHandler({
    schema,
    rootValue: root,
  })
);

// Serve the GraphiQL IDE.
app.get("/", (_req, res) => {
  res.type("html");
  res.end(ruruHTML({ endpoint: "/graphql" }));
});
 
// Start the server at port
app.listen(4000);
console.log("Running a GraphQL API server at http://localhost:4000/");
