import React, { Component } from "react";

export default class Fahrenheit extends Component {
  render() {
    return (
      <div>
        <h3>Fahrenheit: {this.props.temp} °F</h3>
      </div>
    );
  }
}
