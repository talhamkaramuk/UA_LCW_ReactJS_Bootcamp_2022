import React, { Component } from "react";

export default class Data extends Component {
  render() {
    return (
      <div>
        {this.props.users.map((user) => (
          <ul>
            <li key={user.id}>
              {user.username}:{user.name}
            </li>
          </ul>
        ))}
      </div>
    );
  }
}
