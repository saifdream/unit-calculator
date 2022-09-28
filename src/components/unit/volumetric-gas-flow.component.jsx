import React, { Component } from 'react';
import { Container } from 'react-bootstrap'
import UnitTemplete from '../unit.templete';

export class VolumetricGasFlow extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fromValue: 1,
      toValue: 1,
      fromUnit: 'f-Nm³/hr',
      toUnit: 't-Nm³/hr',
    };
  }

  componentDidMount() { }

  conversionSwitch = (conversion, value) => ({
    /* Normal meter cube/hour */
    'f-Nm³/hr to t-Nm³/hr': value,
    'f-Nm³/hr to t-scfh': (value) * 35.31073,
    'f-Nm³/hr to t-scfm': (value) * 0.588582,

    /* Standard cubic feet/hour */
    'f-scfh to t-scfh': value,
    'f-scfh to t-Nm³/hr': (value) * 0.02832,
    'f-scfh to t-scfm': (value) * 0.016669,

    /* Standard cubic feet/minute */
    'f-scfm to t-scfm': value,
    'f-scfm to t-Nm³/hr': (value) * 1.699,
    'f-scfm to t-scfh': (value) * 59.99294,
  })[conversion];

  render() {
    const fromUnits = [
      { id: 1, name: 'Normal meter cube/hour', short: 'Nm³/hr', value: 'f-Nm³/hr' },
      { id: 2, name: 'Standard cubic feet/hour', short: 'scfh', value: 'f-scfh' },
      { id: 3, name: 'Standard cubic feet/minute', short: 'scfm', value: 'f-scfm' },
    ];

    const toUnits = [
      { id: 1, name: 'Normal meter cube/hour', short: 'Nm³/hr', value: 't-Nm³/hr' },
      { id: 2, name: 'Standard cubic feet/hour', short: 'scfh', value: 't-scfh' },
      { id: 3, name: 'Standard cubic feet/minute', short: 'scfm', value: 't-scfm' },
    ];

    return (
      <Container fluid={true} style={{marginTop: 95}}>
        <h5 align="center">Volumetric Gas Flow</h5>
        <UnitTemplete {...this.state} conversionSwitch={this.conversionSwitch} fromUnits={fromUnits} toUnits={toUnits} />
      </Container>
    )
  }
}

export default VolumetricGasFlow;