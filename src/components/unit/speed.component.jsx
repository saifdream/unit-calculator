import React, { Component } from 'react';
import { Container } from 'react-bootstrap'
import UnitTemplete from '../unit.templete';

export class Speed extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fromValue: 1,
      toValue: 1,
      fromUnit: 'f-m/s',
      toUnit: 't-m/s',
    };
  }

  componentDidMount() { }

  conversionSwitch = (conversion, value) => ({
    /* Meter/Second */
    'f-m/s to t-m/s': value,
    'f-m/s to t-m/min': (value) * 59.988,
    'f-m/s to t-km/h': (value) * 3.599712,
    'f-m/s to t-ft/s': (value) * 3.28084,
    'f-m/s to t-ft/m': (value) * 196.8504,
    'f-m/s to t-mi/h': (value) * 2.237136,

    /* Meter/Minute */
    'f-m/min to t-m/min': value,
    'f-m/min to t-m/s': (value) * 0.01667,
    'f-m/min to t-km/h': (value) * 0.060007,
    'f-m/min to t-ft/s': (value) * 0.054692,
    'f-m/min to t-ft/m': (value) * 3.281496,
    'f-m/min to t-mi/h': (value) * 0.037293,

    /* Kilometer/hour */
    'f-km/h to t-km/h': value,
    'f-km/h to t-m/s': (value) * 0.2778,
    'f-km/h to t-m/min': (value) * 16.66467,
    'f-km/h to t-ft/s': (value) * 0.911417,
    'f-km/h to t-ft/m': (value) * 54.68504,
    'f-km/h to t-mi/h': (value) * 0.621477,

    /* Feet/Second */
    'f-ft/s to t-ft/s': value,
    'f-ft/s to t-m/s': (value) * 0.3048,
    'f-ft/s to t-m/min': (value) * 18.28434,
    'f-ft/s to t-km/h': (value) * 1.097192,
    'f-ft/s to t-ft/m': (value) * 60,
    'f-ft/s to t-mi/h': (value) * 0.681879,


    /* Feet/minute */
    'f-ft/m to t-ft/m': value,
    'f-ft/m to t-m/s': (value) * 0.00508,
    'f-ft/m to t-m/min': (value) * 0.304739,
    'f-ft/m to t-km/h': (value) * 0.018287,
    'f-ft/m to t-ft/s': (value) * 0.016667,
    'f-ft/m to t-mi/h': (value) * 0.011365,

    /* Miles/hour */
    'f-mi/h to t-mi/h': value,
    'f-mi/h to t-m/s': (value) * 0.447,
    'f-mi/h to t-m/min': (value) * 26.81464,
    'f-mi/h to t-km/h': (value) * 1.609071,
    'f-mi/h to t-ft/s': (value) * 1.466535,
    'f-mi/h to t-ft/m': (value) * 87.99213,
  })[conversion];

  render() {
    const fromUnits = [
      { id: 1, name: 'Meter/Second', short: 'm/s', value: 'f-m/s' },
      { id: 2, name: 'Meter/Minute', short: 'm/min', value: 'f-m/min' },
      { id: 3, name: 'Kilometer/hour', short: 'km/h', value: 'f-km/h' },
      { id: 4, name: 'Feet/Second', short: 'ft/s', value: 'f-ft/s' },
      { id: 5, name: 'Feet/minute', short: 'ft/m', value: 'f-ft/m' },
      { id: 6, name: 'Miles/hour', short: 'mi/h', value: 'f-mi/h' },
    ];

    const toUnits = [
      { id: 1, name: 'Meter/Second', short: 'm/s', value: 't-m/s' },
      { id: 2, name: 'Meter/Minute', short: 'm/min', value: 't-m/min' },
      { id: 3, name: 'Kilometer/hour', short: 'km/h', value: 't-km/h' },
      { id: 4, name: 'Feet/Second', short: 'ft/s', value: 't-ft/s' },
      { id: 5, name: 'Feet/minute', short: 'ft/m', value: 't-ft/m' },
      { id: 6, name: 'Miles/hour', short: 'mi/h', value: 't-mi/h' },
    ];

    return (
      <Container fluid={true} style={{marginTop: 95}}>
        <h5 align="center">Speed</h5>
        <UnitTemplete {...this.state} conversionSwitch={this.conversionSwitch} fromUnits={fromUnits} toUnits={toUnits} />
      </Container>
    )
  }
}

export default Speed;