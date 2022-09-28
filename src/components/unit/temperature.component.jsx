import React, { Component } from 'react';
import { Container } from 'react-bootstrap'
import UnitTemplete from '../unit.templete';

export class Temperature extends Component {
	constructor(props) {
    super(props);

    this.state = {
      fromValue: 1,
      toValue: 1,
      fromUnit: 'f-°C',
      toUnit: 't-°C',
    };
  }

  componentDidMount() { }

  conversionSwitch = (conversion, value) => ({
    /* Degree Celsius */
    'f-°C to t-°C': value,
    'f-°C to t-°F': (value * 9/5) + 32,
    'f-°C to t-K': value + 273.15,

    /* Degree Fahrenheit */
    'f-°F to t-°C': (value - 32) * 5/9,
    'f-°F to t-°F': value,
    'f-°F to t-K': (value - 32) * 5/9 + 273.15,

    /* Kelvin */
    'f-K to t-°C': value - 273.15,
    'f-K to t-°F': (value - 273.15) * 9/5 + 32,
    'f-K to t-K': value,
  })[conversion];

  render() {
    const fromUnits = [
      { id: 1, name: 'Degree Celsius', short: '°C', value: 'f-°C' },
      { id: 2, name: 'Degree Fahrenheit', short: '°F', value: 'f-°F' },
      { id: 3, name: 'Kelvin', short: 'K', value: 'f-K' },
    ];

    const toUnits = [
      { id: 1, name: 'Degree Celsius', short: '°C', value: 't-°C' },
      { id: 2, name: 'Degree Fahrenheit', short: '°F', value: 't-°F' },
      { id: 3, name: 'Kelvin', short: 'K', value: 't-K' },
    ];

    return (
      <Container fluid={true} style={{marginTop: 95}}>
        <h5 align="center">Temperature</h5>
        <UnitTemplete {...this.state} conversionSwitch={this.conversionSwitch} fromUnits={fromUnits} toUnits={toUnits} />
      </Container>
    )
  }
}

export default Temperature;