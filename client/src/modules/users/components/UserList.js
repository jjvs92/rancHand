import React, { Component } from 'react';

export default class UserList extends Component {
  constructor(props) {
    super(props);

    this.showUsers = this.showUsers.bind(this);
  }

  showUsers() {
    const { users, usersLoading } = this.props;

    if (!usersLoading && users.length > 0) {
      return users.map(user => {
        return (
          <div>
            <div>First Name: { user.firstName }</div>
            <div>Last Name: { user.lastName }</div>
          </div>
        );
      });
    } else {
      return (
        <div>
          <h3>No users available</h3>
          <p>Use the form on the right to create a new user.</p>
        </div>
      );
    }
  }

  render() {
    return (
      <div className="users-container">
        {this.showUsers()}
      </div>
    );
  }
}