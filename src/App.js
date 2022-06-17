import React, { Component } from "react";
import axios from "axios";
import Loading from "./components/Loading";
import Data from "./components/Data";

export default class App extends Component {
  state = {
    users: [],
    done: false,
  };

  getData = () => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      this.setState({ users: res.data, done: true });
    });
  };

  componentDidMount() {
    this.getData();
  }

  render() {
    return (
      <div>
        {this.state.done ? <Data users={this.state.users} /> : <Loading />}
      </div>
    );
  }
}
