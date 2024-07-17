import { buildSchema } from "graphql";
import gql from "graphql-tag";

// Construct a schema, using GraphQL schema language
export const typeDefs = gql`
    type Query {
      hello: String
      persons: [Person!]!
    }

    type Person {
      name: String
      lastname: String
      age: Int
    }
`;