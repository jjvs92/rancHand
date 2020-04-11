// Import Express and Apollo Server
const express = require('express');
const { ApolloServer } = require('apollo-server-express');

// Import GraphQL type definitions
const typeDefs = require('./modules/user/graphqlSchema');

// Import GraphQL resolvers
const resolvers = require('./modules/user/resolvers');

// Initialize an Apollo server
const server = new ApolloServer({ typeDefs, resolvers });

// Initialize an Express application
const app = express();

// Use the Express application as middleware in Apollo server
server.applyMiddleware({ app });


const port = process.env.PORT || 3000

// Set the port that the Express application will listen to
app.listen({ port }, () => {
  console.log(`Server running on http://localhost:${port}${server.graphqlPath}`);
});