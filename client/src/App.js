import React, { Component } from 'react'
import { BrowserRouter , Route, withRouter } from 'react-router-dom'
import { ApolloProvider } from 'react-apollo';
import apolloClient from './config/createApolloClient';
import { Users } from './modules/users';

// import Home from "./somewhere"

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <ApolloProvider client={apolloClient}>
            <UsersRoute /> 
            {/* <Route exact path="/" component={Home} /> */}
            {/* <Route exact path="/users" component={Users} /> */}
        </ApolloProvider>
      </BrowserRouter>

    )
  }
}

const determineUsersPage = (props) => {
  const { location } = props;
  if (location.pathname.match('/users')){
    return <Users />
  }
  return (
    null
  )
}

const UsersRoute = withRouter(determineUsersPage)

export default App;