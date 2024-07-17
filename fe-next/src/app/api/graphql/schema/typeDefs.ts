import gql from "graphql-tag";

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
