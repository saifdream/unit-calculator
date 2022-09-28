import React, { Component } from 'react';
import { Container } from 'react-bootstrap'
import UnitTemplete from '../unit.templete';

export class MassFlow extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fromValue: 1,
      toValue: 1,
      fromUnit: 'f-kg/h',
      toUnit: 't-kg/h',
    };
  }

  componentDidMount() { }

  conversionSwitch = (conversion, value) => ({
    /* Kilogram/hour */
    'f-kg/h to t-kg/h': value,
    'f-kg/h to t-lb/hour': (value) * 2.204586,
    'f-kg/h to t-kg/s': (value) * 0.000278,
    'f-kg/h to t-t/h': (value) * 0.001,

    /* Pound/hour */
    'f-lb/hour to t-lb/hour': value,
    'f-lb/hour to t-kg/h': (value) * 0.4536,
    'f-lb/hour to t-kg/s': (value) * 0.000126,
    'f-lb/hour to t-t/h': (value) * 0.000454,

    /* Kilogram/second */
    'f-kg/s to t-kg/s': value,
    'f-kg/s to t-kg/h': (value) * 3600,
    'f-kg/s to t-lb/hour': (value) * 7936.508,
    'f-kg/s to t-t/h': (value) * 3.6,

    /* Ton/hour */
    'f-t/h to t-t/h': value,
    'f-t/h to t-kg/h': (value) * 1000,
    'f-t/h to t-lb/hour': (value) * 2204.586,
    'f-t/h to t-kg/s': (value) * 0.277778,
  })[conversion];

  render() {
    const fromUnits = [
      { id: 1, name: 'Kilogram/hour', short: 'kg/h', value: 'f-kg/h' },
      { id: 2, name: 'Pound/hour', short: 'lb/hour', value: 'f-lb/hour' },
      { id: 3, name: 'Kilogram/second', short: 'kg/s', value: 'f-kg/s' },
      { id: 4, name: 'Ton/hour', short: 't/h', value: 'f-t/h' },
    ];

    const toUnits = [
      { id: 1, name: 'Kilogram/hour', short: 'kg/h', value: 't-kg/h' },
      { id: 2, name: 'Pound/hour', short: 'lb/hour', value: 't-lb/hour' },
      { id: 3, name: 'Kilogram/second', short: 'kg/s', value: 't-kg/s' },
      { id: 4, name: 'Ton/hour', short: 't/h', value: 't-t/h' },
    ];

    return (
      <Container fluid={true} style={{marginTop: 95}}>
        <h5 align="center">Mass Flow</h5>
        <UnitTemplete {...this.state} conversionSwitch={this.conversionSwitch} fromUnits={fromUnits} toUnits={toUnits} />
      </Container>
    )
  }
}

export default MassFlow;