import React, { Component } from "react";

export default class Celcius extends Component {
  render() {
    return (
      <div>
        <h3>Celcius: {this.props.temp} °C</h3>
      </div>
    );
  }
}
