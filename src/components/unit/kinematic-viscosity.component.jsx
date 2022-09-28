import React, { Component } from 'react';
import { Container } from 'react-bootstrap'
import UnitTemplete from '../unit.templete';

export class KinematicViscosity extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fromValue: 1,
      toValue: 1,
      fromUnit: 'f-cs',
      toUnit: 't-cs',
    };
  }

  componentDidMount() { }

  conversionSwitch = (conversion, value) => ({
    /* Centistoke */
    'f-cs to t-cs': value,
    'f-cs to t-St': (value) * 0.01,
    'f-cs to t-fsps': (value) * 0.000011,
    'f-cs to t-msps': (value) * 0.000001,

    /* Stoke */
    'f-St to t-St': value,
    'f-St to t-cs': (value) * 100,
    'f-St to t-fsps': (value) * 0.001076,
    'f-St to t-msps': (value) * 0.0001,

    /* FeetSquarePerSecond */
    'f-fsps to t-fsps': value,
    'f-fsps to t-cs': (value) * 92903,
    'f-fsps to t-St': (value) * 929.03,
    'f-fsps to t-msps': (value) * 0.092903,

    /* Meter Square/Second */
    'f-msps to t-msps': value,
    'f-msps to t-cs': (value) * 1000000,
    'f-msps to t-St': (value) * 10000,
    'f-msps to t-fsps': (value) * 10.76392,
  })[conversion];

  render() {
    const fromUnits = [
      { id: 1, name: 'Centistoke', short: 'cs', value: 'f-cs' },
      { id: 2, name: 'Stoke', short: 'St', value: 'f-St' },
      { id: 3, name: 'Feet Square Per Second', short: 'ft²/s', value: 'f-fsps' },
      { id: 4, name: 'Meter Square Per Second', short: 'm²/s', value: 'f-msps' },
    ];

    const toUnits = [
      { id: 1, name: 'Centistoke', short: 'cs', value: 't-cs' },
      { id: 2, name: 'Stoke', short: 'St', value: 't-St' },
      { id: 3, name: 'Feet Square Per Second', short: 'ft²/s', value: 't-fsps' },
      { id: 4, name: 'Meter Square Per Second', short: 'm²/s', value: 't-msps' },
    ];

    return (
      <Container fluid={true} style={{marginTop: 95}}>
        <h5 align="center">Kinematic Viscosity</h5>
        <UnitTemplete {...this.state} conversionSwitch={this.conversionSwitch} fromUnits={fromUnits} toUnits={toUnits} />
      </Container>
    )
  }
}

export default KinematicViscosity;