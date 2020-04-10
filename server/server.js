// #1 Import Express and Apollo Server
const express = require('express');
const { ApolloServer } = require('apollo-server-express');

// // #2 Import postgreql schema
// TO DO
// postgresql stuff

// #3 Import GraphQL type definitions
const typeDefs = require('./modules/user/graphqlSchema');

// #4 Import GraphQL resolvers
const resolvers = require('./modules/user/resolvers');

// #5 Initialize an Apollo server
const server = new ApolloServer({ typeDefs, resolvers });

// #6 Initialize an Express application
const app = express();

// #7 Use the Express application as middleware in Apollo server
server.applyMiddleware({ app });


const port = process.env.PORT || 3000

// #8 Set the port that the Express application will listen to
app.listen({ port }, () => {
  console.log(`Server running on http://localhost:${port}${server.graphqlPath}`);
});