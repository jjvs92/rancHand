import React from 'react';
import { Query } from 'react-apollo';
import getUsers from '../queries/getUsers.graphql';

const withUsers = Component => props => {
  return (
    <Query query={getUsers}>
      {({ loading, data }) => {
        return (
          <Component usersLoading={loading} users={data && data.users} {...props} />
        );
      }}
    </Query>
  );
};

export default withUsers;
