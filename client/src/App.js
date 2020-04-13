import React, { Component } from 'react'
import { ApolloProvider } from 'react-apollo';
import apolloClient from './config/createApolloClient';
import { Users } from './modules/users';

class App extends Component {
  render() {
    return (
      <ApolloProvider client={apolloClient}>
        <Users />
      </ApolloProvider>
    )
  }
}

export default App;