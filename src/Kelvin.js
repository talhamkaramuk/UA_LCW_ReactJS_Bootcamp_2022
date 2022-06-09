import React, { Component } from "react";

export default class Kelvin extends Component {
  render() {
    return (
      <div>
        <h3>Kelvin: {this.props.temp} K</h3>
      </div>
    );
  }
}
