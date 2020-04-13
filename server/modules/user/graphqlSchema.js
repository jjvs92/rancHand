// #1 Import the gql method from apollo-server-express
const { gql } = require('apollo-server-express')

// #2 Construct a schema with gql and using the GraphQL schema language
const typeDefs = gql`
  type User {
    _id: ID!,
    firstName: String!,
    lastName: String!,
    email: String!,
    type: String!
  },
  type Ranch {
    _id: ID!,
    owner: User!,
    name: String!,
    size: String!,
  },
  type Query {
    ranches: [Ranch]!,
    users: [User]!,
    getUserById(_id: ID!) : User
  },
  type Mutation {
    addRanch(owner: String!, name: String!, size: String!): Ranch,
    addUser(firstName: String!, lastName: String!, email: String!, type: String!): User,
    updateUser(firstName: String, lastName: String, email: String, type: String): User,
  }
`

module.exports = typeDefs