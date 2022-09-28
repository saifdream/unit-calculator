import React, { Component } from 'react';
import { Container } from 'react-bootstrap'
import UnitTemplete from '../unit.templete';

export class Mass extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fromValue: 1,
      toValue: 1,
      fromUnit: 'f-g',
      toUnit: 't-g',
    };
  }

  componentDidMount() { }

  conversionSwitch = (conversion, value) => ({
    /* Grams */
    'f-g to t-g': value,
    'f-g to t-kg': (value) * 0.001,
    'f-g to t-tonne': (value) * 0.000001,
    'f-g to t-shton': (value) * 0.000001,
    'f-g to t-lton': (value) * 9.84e-07,
    'f-g to t-lb': (value) * 0.002205,
    'f-g to t-oz': (value) * 0.035273,

    /* Kilograms */
    'f-kg to t-g': (value) * 1000,
    'f-kg to t-kg': value,
    'f-kg to t-tonne': (value) * 0.001,
    'f-kg to t-shton': (value) * 0.001102,
    'f-kg to t-lton': (value) * 0.000984,
    'f-kg to t-lb': (value) * 2.204586,
    'f-kg to t-oz': (value) * 35.27337,

    /* Metric tonnes */
    'f-tonne to t-g': (value) * 1000000,
    'f-tonne to t-kg': (value) * 1000,
    'f-tonne to t-tonne': value,
    'f-tonne to t-shton': (value) * 1.102293,
    'f-tonne to t-lton': (value) * 0.984252,
    'f-tonne to t-lb': (value) * 2204.586,
    'f-tonne to t-oz': (value) * 35273.37,

    /* Short ton */
    'f-shton to t-g': (value) * 907200,
    'f-shton to t-kg': (value) * 907.2,
    'f-shton to t-tonne': (value) * 0.9072,
    'f-shton to t-shton': value,
    'f-shton to t-lton': (value) * 0.892913,
    'f-shton to t-lb': (value) * 2000,
    'f-shton to t-oz': (value) * 32000,

    /* Long ton */
    'f-lton to t-g': (value) * 1016000,
    'f-lton to t-kg': (value) * 1016,
    'f-lton to t-tonne': (value) * 1.016,
    'f-lton to t-shton': (value) * 1.119929,
    'f-lton to t-lton': value,
    'f-lton to t-lb': (value) * 2239.859,
    'f-lton to t-oz': (value) * 35837.74,

    /* Pounds */
    'f-lb to t-g': (value) * 453.6,
    'f-lb to t-kg': (value) * 0.4536,
    'f-lb to t-tonne': (value) * 0.000454,
    'f-lb to t-shton': (value) * 0.0005,
    'f-lb to t-lton': (value) * 0.000446,
    'f-lb to t-lb': value,
    'f-lb to t-oz': (value) * 16,

    /* Ounces */
    'f-oz to t-g': (value) * 28,
    'f-oz to t-kg': (value) * 0.02835,
    'f-oz to t-tonne': (value) * 0.000028,
    'f-oz to t-shton': (value) * 0.000031,
    'f-oz to t-lton': (value) * 0.000028,
    'f-oz to t-lb': (value) * 0.0625,
    'f-oz to t-oz': value,
  })[conversion];

  render() {
    const fromUnits = [
      { id: 1, name: 'Grams', short: 'g', value: 'f-g' },
      { id: 2, name: 'Kilograms', short: 'kg', value: 'f-kg' },
      { id: 3, name: 'Metric tonnes', short: 'tonne', value: 'f-tonne' },
      { id: 4, name: 'Short ton', short: 'shton', value: 'f-shton' },
      { id: 5, name: 'Long ton', short: 'lton', value: 'f-lton' },
      { id: 6, name: 'Pounds', short: 'lb', value: 'f-lb' },
      { id: 7, name: 'Ounces', short: 'oz', value: 'f-oz' },
    ];

    const toUnits = [
      { id: 1, name: 'Grams', short: 'g', value: 't-g' },
      { id: 2, name: 'Kilograms', short: 'kg', value: 't-kg' },
      { id: 3, name: 'Metric tonnes', short: 'tonne', value: 't-tonne' },
      { id: 4, name: 'Short ton', short: 'shton', value: 't-shton' },
      { id: 5, name: 'Long ton', short: 'lton', value: 't-lton' },
      { id: 6, name: 'Pounds', short: 'lb', value: 't-lb' },
      { id: 7, name: 'Ounces', short: 'oz', value: 't-oz' },
    ];

    return (
      <Container fluid={true} style={{marginTop: 95}}>
        <h5 align="center">Mass (Weight)</h5>
        <UnitTemplete {...this.state} conversionSwitch={this.conversionSwitch} fromUnits={fromUnits} toUnits={toUnits} />
      </Container>
    )
  }
}

export default Mass;