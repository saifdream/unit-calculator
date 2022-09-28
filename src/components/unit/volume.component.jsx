import React, { Component } from 'react';
import { Container } from 'react-bootstrap'
import UnitTemplete from '../unit.templete';

export class Volume extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fromValue: 1,
      toValue: 1,
      fromUnit: 'f-cm³',
      toUnit: 't-cm³',
    };
  }

  componentDidMount() { }

  conversionSwitch = (conversion, value) => ({
    /* Centimeter cube */
    'f-cm³ to t-cm³': value,
    'f-cm³ to t-m³': (value) * 0.000001,
    'f-cm³ to t-ltr': (value) * 0.001,
    'f-cm³ to t-in³': (value) * 0.061024,
    'f-cm³ to t-ft³': (value) * 0.000035,
    'f-cm³ to t-US gal': (value) * 0.000264,
    'f-cm³ to t-Imp. gal': (value) * 0.00022,
    'f-cm³ to t-US brl': (value) * 0.000006,
    /* Meter square */
    'f-m³ to t-cm³': (value) * 1000000,
    'f-m³ to t-m³': value,
    'f-m³ to t-ltr': (value) * 1000,
    'f-m³ to t-in³': (value) * 61024,
    'f-m³ to t-ft³': (value) * 35,
    'f-m³ to t-US gal': (value) * 264,
    'f-m³ to t-Imp. gal': (value) * 220,
    'f-m³ to t-US brl': (value) * 6.29,
    /* Liter square */
    'f-ltr to t-cm³': (value) * 1000,
    'f-ltr to t-m³': (value) * 0.001,
    'f-ltr to t-ltr': value,
    'f-ltr to t-in³': (value) * 61,
    'f-ltr to t-ft³': (value) * 0.035,
    'f-ltr to t-US gal': (value) * 0.264201,
    'f-ltr to t-Imp. gal': (value) * 0.22,
    'f-ltr to t-US brl': (value) * 0.00629,
    /* Inch square */
    'f-in³ to t-cm³': (value) * 16.4,
    'f-in³ to t-m³': (value) * 0.000016,
    'f-in³ to t-ltr': (value) * 0.016387,
    'f-in³ to t-in³': value,
    'f-in³ to t-ft³': (value) * 0.000579,
    'f-in³ to t-US gal': (value) * 0.004329,
    'f-in³ to t-Imp. gal': (value) * 0.003605,
    'f-in³ to t-US brl': (value) * 0.000103,
    /* Foot square */
    'f-ft³ to t-cm³': (value) * 28317,
    'f-ft³ to t-m³': (value) * 0.028317,
    'f-ft³ to t-ltr': (value) * 28.31685,
    'f-ft³ to t-in³': (value) * 1728,
    'f-ft³ to t-ft³': value,
    'f-ft³ to t-US gal': (value) * 7.481333,
    'f-ft³ to t-Imp. gal': (value) * 6.229712,
    'f-ft³ to t-US brl': (value) * 0.178127,
    /* US gallons */
    'f-US gal to t-cm³': (value) * 3785,
    'f-US gal to t-m³': (value) * 0.003785,
    'f-US gal to t-ltr': (value) * 3.79,
    'f-US gal to t-in³': (value) * 231,
    'f-US gal to t-ft³': (value) * 0.13,
    'f-US gal to t-US gal': value,
    'f-US gal to t-Imp. gal': (value) * 0.832701,
    'f-US gal to t-US brl': (value) * 0.02381,
    /* Imperial gallons */
    'f-Imp. gal to t-cm³': (value) * 4545,
    'f-Imp. gal to t-m³': (value) * 0.004545,
    'f-Imp. gal to t-ltr': (value) * 4.55,
    'f-Imp. gal to t-in³': (value) * 277,
    'f-Imp. gal to t-ft³': (value) * 0.16,
    'f-Imp. gal to t-US gal': (value) * 1.20,
    'f-Imp. gal to t-Imp. gal': value,
    'f-Imp. gal to t-US brl': (value) * 0.028593,
    /* US barrel (oil) */
    'f-US brl to t-cm³': (value) * 158970,
    'f-US brl to t-m³': (value) * 0.15897,
    'f-US brl to t-ltr': (value) * 159,
    'f-US brl to t-in³': (value) * 9701,
    'f-US brl to t-ft³': (value) * 6,
    'f-US brl to t-US gal': (value) * 42,
    'f-US brl to t-Imp. gal': (value) * 35,
    'f-US brl to t-US brl': value,
  })[conversion];

  render() {
    const fromUnits = [
      { id: 1, name: 'Centimeter cube', short: 'cm³', value: 'f-cm³' },
      { id: 2, name: 'Liter', short: 'ltr', value: 'f-ltr' },
      { id: 3, name: 'Meter cube', short: 'm³', value: 'f-m³' },
      { id: 4, name: 'Inch cube', short: 'in³', value: 'f-in³' },
      { id: 5, name: 'Foot cube', short: 'ft³', value: 'f-ft³' },
      { id: 6, name: 'US gallons', short: 'US gal', value: 'f-US gal' },
      { id: 7, name: 'Imperial gallons', short: 'Imp. gal', value: 'f-Imp. gal' },
      { id: 8, name: 'US barrel (oil)', short: 'US brl', value: 'f-US brl' },
    ];

    const toUnits = [
      { id: 1, name: 'Centimeter cube', short: 'cm³', value: 't-cm³' },
      { id: 2, name: 'Liter', short: 'ltr', value: 't-ltr' },
      { id: 3, name: 'Meter cube', short: 'm³', value: 't-m³' },
      { id: 4, name: 'Inch cube', short: 'in³', value: 't-in³' },
      { id: 5, name: 'Foot cube', short: 'ft³', value: 't-ft³' },
      { id: 6, name: 'US gallons', short: 'US gal', value: 't-US gal' },
      { id: 7, name: 'Imperial gallons', short: 'Imp. gal', value: 't-Imp. gal' },
      { id: 8, name: 'US barrel (oil)', short: 'US brl', value: 't-US brl' },
    ];

    return (
      <Container fluid={true} style={{marginTop: 95}}>
        <h5 align="center">Volume</h5>
        <UnitTemplete {...this.state} conversionSwitch={this.conversionSwitch} fromUnits={fromUnits} toUnits={toUnits} />
      </Container>
    )
  }
}

export default Volume;