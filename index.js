const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');

const schema = gql(`
  type Query {
    helloWorld: String!
  }
`)

const resolvers = {
  Query: {
    helloWorld: () => 'Hello World!'
  }
}

const server = new ApolloServer({ typeDefs: schema, resolvers });

const app = express();

server.applyMiddleware({ app });

app.listen({ port: 9090 }, () => console.log(`Servidor rodando na porta localhost:9090${server.graphqlPath}`));
