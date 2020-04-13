import React from 'react';
import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';

export const GET_USERS = gql`
  {
    users {
      firstName
      lastName
    }
  }
`;

const withUsers = Component => props => {
  return (
    <Query query={GET_USERS}>
      {({ loading, data }) => {
        console.log("-- Provider --")
        console.log(data)
        console.log("Loading")
        console.log(loading)
        return (
          <Component usersLoading={loading} users={data && data.users} {...props} />
        );
      }}
    </Query>
  );
};

export default withUsers;