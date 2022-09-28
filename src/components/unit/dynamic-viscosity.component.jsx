import React, { Component } from 'react';
import { Container } from 'react-bootstrap'
import UnitTemplete from '../unit.templete';

export class DynamicViscosity extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fromValue: 1,
      toValue: 1,
      fromUnit: 'f-cp',
      toUnit: 't-cp',
    };
  }

  componentDidMount() { }

  conversionSwitch = (conversion, value) => ({
    /* Centipoise */
    'f-cp to t-cp': value,
    'f-cp to t-poise': (value) * 0.01,
    'f-cp to t-ppfs': (value) * 0.000672,

    /* Poise */
    'f-poise to t-poise': value,
    'f-poise to t-cp': (value) * 100,
    'f-poise to t-ppfs': (value) * 0.067197,

    /* PoundPerFeetSecond */
    'f-ppfs to t-ppfs': value,
    'f-ppfs to t-cp': (value) * 1488.16,
    'f-ppfs to t-poise': (value) * 14.8816,
  })[conversion];

  render() {
    const fromUnits = [
      { id: 1, name: 'Centipoise*', short: 'cp', value: 'f-cp' },
      { id: 2, name: 'Poise', short: 'poise', value: 'f-poise' },
      { id: 3, name: 'Pound/foot·second', short: 'lb/(ft·s)', value: 'f-ppfs' },
    ];

    const toUnits = [
      { id: 1, name: 'Centipoise*', short: 'cp', value: 't-cp' },
      { id: 2, name: 'Poise', short: 'poise', value: 't-poise' },
      { id: 3, name: 'Pound/foot·second', short: 'lb/(ft·s)', value: 't-ppfs' },
    ];

    return (
      <Container fluid={true} style={{marginTop: 95}}>
        <h5 align="center">Dynamic Viscosity</h5>
        <UnitTemplete {...this.state} conversionSwitch={this.conversionSwitch} fromUnits={fromUnits} toUnits={toUnits} />
      </Container>
    )
  }
}

export default DynamicViscosity;