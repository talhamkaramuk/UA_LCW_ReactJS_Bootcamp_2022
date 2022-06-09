import React, { Component } from "react";
import { Button, Col, Container, Row } from "reactstrap";
import Celcius from "./Celcius";
import Fahrenheit from "./Fahrenheit";
import Kelvin from "./Kelvin";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTemp: 0,
    };
  }

  increaseTemp = () => {
    this.setState({ currentTemp: this.state.currentTemp + 1 }); // increase the current temp by 1 degree
  };

  decreaseTemp = () => {
    this.setState({ currentTemp: this.state.currentTemp - 1 }); // decrease the current temp by 1 degree
  };

  render() {
    return (
      <div>
        <Container>
          <Row>
            <h2>What is the weather?</h2>
          </Row>
          <br />
          <Row>
            <h3>Current temperature: {this.state.currentTemp} 🌡</h3>
          </Row>
          <br />
          <Row>
            <Col xs="2">
              <Button
                color="danger"
                outline
                onClick={() => this.increaseTemp()}
              >
                Increase temperature 🔥
              </Button>
            </Col>
            <Col xs="3">
              <Button
                color="primary"
                outline
                onClick={() => this.decreaseTemp()}
              >
                Decrease temperature ❄
              </Button>
            </Col>
            <Col xs="7"></Col>
          </Row>
          <br />
          <Row>
            <h4>Temperature Measurements in 3 Units:</h4>
          </Row>
          <br />
          <Row>
            <Col xs="4">
              <Celcius temp={this.state.currentTemp} />
            </Col>
            <Col xs="4">
              <Fahrenheit temp={this.state.currentTemp * 1.8 + 32} />
            </Col>
            <Col xs="4">
              <Kelvin temp={this.state.currentTemp + 273.15} />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
