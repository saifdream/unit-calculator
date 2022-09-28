import React, { Component } from 'react';
import { Container } from 'react-bootstrap'
import UnitTemplete from '../unit.templete';

export class Area extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fromValue: 1,
      toValue: 1,
      fromUnit: 'f-mm²',
      toUnit: 't-mm²',
    };
  }

  componentDidMount() { }

  conversionSwitch = (conversion, value) => ({
    /* Millimeter square */
    'f-mm² to t-mm²': value,
    'f-mm² to t-cm²': (value) * 0.01,
    'f-mm² to t-ft²': (value) * 0.000011,
    'f-mm² to t-in²': (value) * 0.00155,
    'f-mm² to t-m²': (value) * 0.000001,
    'f-mm² to t-yd²': (value) * 0.000001,
    /* Centimeter square */
    'f-cm² to t-mm²': (value) * 100,
    'f-cm² to t-cm²': value,
    'f-cm² to t-ft²': (value) * 0.001076,
    'f-cm² to t-in²': (value) * 0.155,
    'f-cm² to t-m²': (value) * 0.0001,
    'f-cm² to t-yd²': (value) * 0.00012,
    /* Meter square */
    'f-m² to t-mm²': (value) * 1000000,
    'f-m² to t-cm²': (value) * 10000,
    'f-m² to t-ft²': (value) * 10.76391,
    'f-m² to t-in²': (value) * 1550.003,
    'f-m² to t-m²': value,
    'f-m² to t-yd²': (value) * 1.19599,
    /* Inch square */
    'f-in² to t-mm²': (value) * 645.16,
    'f-in² to t-cm²': (value) * 6.4516,
    'f-in² to t-ft²': (value) * 0.006944,
    'f-in² to t-in²': value,
    'f-in² to t-m²': (value) * 0.000645,
    'f-in² to t-yd²': (value) * 0.000772,
    /* Foot square */
    'f-ft² to t-mm²': (value) * 92903,
    'f-ft² to t-cm²': (value) * 929.0304,
    'f-ft² to t-ft²': value,
    'f-ft² to t-in²': (value) * 144,
    'f-ft² to t-m²': (value) * 0.092903,
    'f-ft² to t-yd²': (value) * 0.111111,
    /* Yard square */
    'f-yd² to t-mm²': (value) * 836127,
    'f-yd² to t-cm²': (value) * 8361.274,
    'f-yd² to t-ft²': (value) * 9,
    'f-yd² to t-in²': (value) * 1296,
    'f-yd² to t-m²': (value) * 0.836127,
    'f-yd² to t-yd²': value,
  })[conversion];

  render() {
    const fromUnits = [
      { id: 1, name: 'Millimeter square', short: 'mm²', value: 'f-mm²' },
      { id: 2, name: 'Centimeter square', short: 'cm²', value: 'f-cm²' },
      { id: 3, name: 'Meter square', short: 'm²', value: 'f-m²' },
      { id: 4, name: 'Inch square', short: 'in²', value: 'f-in²' },
      { id: 5, name: 'Foot square', short: 'ft²', value: 'f-ft²' },
      { id: 6, name: 'Yard square', short: 'yd²', value: 'f-yd²' },
    ];

    const toUnits = [
      { id: 1, name: 'Millimeter square', short: 'mm²', value: 't-mm²' },
      { id: 2, name: 'Centimeter square', short: 'cm²', value: 't-cm²' },
      { id: 3, name: 'Meter square', short: 'm²', value: 't-m²' },
      { id: 4, name: 'Inch square', short: 'in²', value: 't-in²' },
      { id: 5, name: 'Foot square', short: 'ft²', value: 't-ft²' },
      { id: 6, name: 'Yard square', short: 'yd²', value: 't-yd²' },
    ];

    return (
      <Container fluid={true} style={{ marginTop: 95 }}>
        <h5 align="center">Area</h5>
        <UnitTemplete {...this.state} conversionSwitch={this.conversionSwitch} fromUnits={fromUnits} toUnits={toUnits} />
      </Container>
    )
  }
}

export default Area;