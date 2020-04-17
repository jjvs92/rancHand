import React, { Component } from 'react'
import { BrowserRouter , Route } from 'react-router-dom'
import { ApolloProvider } from 'react-apollo';
import apolloClient from './config/createApolloClient';

import Admin from "./pages/admin"

import './all.css'

class App extends Component {
  render() {
    console.log("fdsafsafas")
    return (
      <BrowserRouter>
        <ApolloProvider client={apolloClient}>
          <Route path="/admin" component={Admin} />
        </ApolloProvider>
      </BrowserRouter>
    )
  }
}

export default App;