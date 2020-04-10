// #1 Import the model created with mongoose
// const User = require('./models/user');
const { Company, User} = require('./models');
// #2 Create resolver functions to handle GraphQL queries
/**
 * Query resolver "posts" must return values in response to
 * the query "users" in GraphQL schema.
 */
const resolvers = {
  Query: {
    // Query which returns posts list
    users: async () => {
      const users = await User.query()
      console.info('Users: ', users);
      console.info("INVOKED BITCHES")
      return [{
        _id: 'testId',
        firstName: 'testFirstName',
        lastName: 'testLastName',
        email: 'testEmail@ranchand.com',
        type: 'testOwner'
      }]
    }
  },

/**
 * Mutation resolver addPost creates a new document in MongoDB
 * in response to the "addPost" mutation in GraphQL schema.
 * The mutation resolvers must return the created object.
 */
  Mutation: {
    addUser: (parent, user) => {
      // Create a new record in the database
      console.log('it got invoked')
    
      // Save the record and return it
      return [{
        _id: 'testId',
        firstName: 'testFirstName',
        lastName: 'testLastName',
        email: 'testEmail@ranchand.com',
        type: 'testOwner'
      }];
    }
  }
};

module.exports = resolvers;
