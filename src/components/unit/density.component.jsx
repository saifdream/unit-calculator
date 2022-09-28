import React, { Component } from 'react';
import { Container } from 'react-bootstrap'
import UnitTemplete from '../unit.templete';

export class Density extends Component {
	constructor(props) {
    super(props);

    this.state = {
      fromValue: 1,
      toValue: 1,
      fromUnit: 'f-g/ml',
      toUnit: 't-g/ml',
    };
  }

  componentDidMount() { }

  conversionSwitch = (conversion, value) => ({
    /* Gram/milliliter */
    'f-g/ml to t-g/ml': value,
    'f-g/ml to t-kg/m³': (value) * 0.001,
    'f-g/ml to t-lb/ft³': (value) * 0.01602,
    'f-g/ml to t-lb/in³': (value) * 27.68,

    /* Kilogram/meter cube */
    'f-kg/m³ to t-g/ml': (value) * 1000,
    'f-kg/m³ to t-kg/m³': value,
    'f-kg/m³ to t-lb/ft³': (value) * 16.02,
    'f-kg/m³ to t-lb/in³': (value) * 27680,

    /* Pound/foot cube */
    'f-lb/ft³ to t-g/ml': (value) * 62.42197,
    'f-lb/ft³ to t-kg/m³': (value) * 0.062422,
    'f-lb/ft³ to t-lb/ft³': value,
    'f-lb/ft³ to t-lb/in³': (value) * 1727.84,

    /* Pound/inch cube */
    'f-lb/in³ to t-g/ml': (value) * 0.036127,
    'f-lb/in³ to t-kg/m³': (value) * 0.000036,
    'f-lb/in³ to t-lb/ft³': (value) * 0.000579,
    'f-lb/in³ to t-lb/in³': value,
  })[conversion];

  render() {
    const fromUnits = [
      { id: 1, name: 'Gram/milliliter', short: 'g/ml', value: 'f-g/ml' },
      { id: 2, name: 'Kilogram/meter cube', short: 'kg/m³', value: 'f-kg/m³' },
      { id: 3, name: 'Pound/foot cube', short: 'lb/ft³', value: 'f-lb/ft³' },
      { id: 4, name: 'Pound/inch cube', short: 'lb/in³', value: 'f-lb/in³' },
    ];

    const toUnits = [
      { id: 1, name: 'Gram/milliliter', short: 'g/ml', value: 't-g/ml' },
      { id: 2, name: 'Kilogram/meter cube', short: 'kg/m³', value: 't-kg/m³' },
      { id: 3, name: 'Pound/foot cube', short: 'lb/ft³', value: 't-lb/ft³' },
      { id: 4, name: 'Pound/inch cube', short: 'lb/in³', value: 't-lb/in³' },
    ];

    return (
      <Container fluid={true} style={{marginTop: 95}}>
        <h5 align="center">Density</h5>
        <UnitTemplete {...this.state} conversionSwitch={this.conversionSwitch} fromUnits={fromUnits} toUnits={toUnits} />
      </Container>
    )
  }
}

export default Density;