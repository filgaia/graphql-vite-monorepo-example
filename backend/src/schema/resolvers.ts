// The root provides a resolver function for each API endpoint
export const resolvers = {
  Query: {
    hello: () => "Hello world!",
    persons: () => [
        { name: "Jhon", lastname: "Doe", age: 30 },
        { name: "Alexa", lastname: "Heinz", age: 40 },
    ],
  }
};
