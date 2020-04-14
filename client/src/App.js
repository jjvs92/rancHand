import React, { Component } from 'react'
import { BrowserRouter , Route } from 'react-router-dom'
import { ApolloProvider } from 'react-apollo';
import apolloClient from './config/createApolloClient';
import { Users } from './modules/users';

import Home from "./pages/home"

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <ApolloProvider client={apolloClient}>
          <Route exact path="/" component={Home} />
          <Route exact path="/users" component={Users} />
        </ApolloProvider>
      </BrowserRouter>
    )
  }
}

export default App;