import React, { Component } from 'react'

import { withUsers } from '../providers';
import { UserList } from '../components';


class User extends Component {
  render() {
    const { users, usersLoading } = this.props;
    console.log(users)
    return (
      <div>
        <UserList usersLoading={usersLoading} users={users} />
      </div>
    )
  }
}

export default withUsers(User);