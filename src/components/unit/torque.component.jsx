import React, { Component } from 'react';
import { Container } from 'react-bootstrap'
import UnitTemplete from '../unit.templete';

export class Torque extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fromValue: 1,
      toValue: 1,
      fromUnit: 'f-Nm',
      toUnit: 't-Nm',
    };
  }

  componentDidMount() { }

  conversionSwitch = (conversion, value) => ({
    /* NewtonMeter */
    'f-Nm to t-Nm': value,
    'f-Nm to t-kgfm': (value) * 0.101972,
    'f-Nm to t-ftlb': (value) * 0.737561,
    'f-Nm to t-inlb': (value) * 8.850732,

    /* KilogramForceMeter */
    'f-kgfm to t-kgfm': value,
    'f-kgfm to t-Nm': (value) * 9.80665,
    'f-kgfm to t-ftlb': (value) * 7.233003,
    'f-kgfm to t-inlb': (value) * 86.79603,

    /* FeetPound */
    'f-ftlb to t-ftlb': value,
    'f-ftlb to t-Nm': (value) * 1.35582,
    'f-ftlb to t-kgfm': (value) * 0.138255,
    'f-ftlb to t-inlb': (value) * 12,

    /* InchPound */
    'f-inlb to t-inlb': value,
    'f-inlb to t-Nm': (value) * 0.112985,
    'f-inlb to t-kgfm': (value) * 0.011521,
    'f-inlb to t-ftlb': (value) * 0.083333,
  })[conversion];

  render() {
    const fromUnits = [
      { id: 1, name: 'Newton meter', short: 'Nm', value: 'f-Nm' },
      { id: 2, name: 'Kilogram force meter', short: 'kgfm', value: 'f-kgfm' },
      { id: 3, name: 'Feet pound', short: 'ftlb', value: 'f-ftlb' },
      { id: 4, name: 'Inch pound', short: 'inlb', value: 'f-inlb' },
    ];

    const toUnits = [
      { id: 1, name: 'Newton meter', short: 'Nm', value: 't-Nm' },
      { id: 2, name: 'Kilogram force meter', short: 'kgfm', value: 't-kgfm' },
      { id: 3, name: 'Feet pound', short: 'ftlb', value: 't-ftlb' },
      { id: 4, name: 'Inch pound', short: 'inlb', value: 't-inlb' },
    ];

    return (
      <Container fluid={true} style={{marginTop: 95}}>
        <h5 align="center">Torque</h5>
        <UnitTemplete {...this.state} conversionSwitch={this.conversionSwitch} fromUnits={fromUnits} toUnits={toUnits} />
      </Container>
    )
  }
}

export default Torque;