import React, { Component } from 'react';
import { Container } from 'react-bootstrap'
import UnitTemplete from '../unit.templete';

export class Length extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fromValue: 1,
      toValue: 1,
      fromUnit: 'f-mm',
      toUnit: 't-mm',
    };
  }

  componentDidMount() { }

  conversionSwitch = (conversion, value) => ({
    /* Milimeters */
    'f-mm to t-mm': value,
    'f-mm to t-cm': (value) * 0.1,
    'f-mm to t-ft': (value) * 0.003281,
    'f-mm to t-in': (value) * 0.03937,
    'f-mm to t-m': (value) * 0.001,
    'f-mm to t-km': (value) * 0.000001,
    'f-mm to t-yd': (value) * 0.001094,
    'f-mm to t-mi': (value) * 0.000000621,
    /* Centimeters */
    'f-cm to t-mm': (value) * 10,
    'f-cm to t-cm': value,
    'f-cm to t-ft': (value) * 0.032808399,
    'f-cm to t-in': (value) * 0.39370079,
    'f-cm to t-m': (value) * 0.01,
    'f-cm to t-km': (value) * 0.00001,
    'f-cm to t-yd': (value) * 0.010936,
    'f-cm to t-mi': (value) * 0.000006,
    /* Meters */
    'f-m to t-mm': (value) * 1000,
    'f-m to t-cm': (value) * 100,
    'f-m to t-ft': (value) * 3.2808399,
    'f-m to t-in': (value) * 39.37008,
    'f-m to t-m': value,
    'f-m to t-km': (value) * 0.001,
    'f-m to t-yd': (value) * 1.093613,
    'f-m to t-mi': (value) * 0.00062137119,
    /* Kilometers */
    'f-km to t-mm': (value) * 1000000,
    'f-km to t-cm': (value) * 100000,
    'f-km to t-ft': (value) * 3280.84,
    'f-km to t-in': (value) * 39370.08,
    'f-km to t-m': (value) * 1000,
    'f-km to t-km': value,
    'f-km to t-yd': (value) * 1093.613,
    'f-km to t-mi': (value) * 0.62137119,
    //'f-km to t-nmi': (value) * 0.5399568,
    /* Inches */
    'f-in to t-mm': (value) * 25.4,
    'f-in to t-cm': (value) * 2.54,
    'f-in to t-ft': (value) * 0.083333,
    'f-in to t-in': value,
    'f-in to t-m': (value) * 0.0254,
    'f-in to t-km': (value) * 0.000025,
    'f-in to t-yd': (value) * 0.027778,
    'f-in to t-mi': (value) * 0.000016,
    /* Feet */
    'f-ft to t-mm': (value) * 304.8,
    'f-ft to t-cm': (value) * 30.48,
    'f-ft to t-ft': value,
    'f-ft to t-in': (value) * 12,
    'f-ft to t-m': (value) * 0.3048,
    'f-ft to t-km': (value) * 0.000305,
    'f-ft to t-yd': (value) * 0.333333,
    'f-ft to t-mi': (value) * 0.000189393,
    /* Miles */
    'f-mi to t-mm': (value) * 1609344,
    'f-mi to t-cm': (value) * 160934.4,
    'f-mi to t-ft': (value) * 5280,
    'f-mi to t-in': (value) * 63360,
    'f-mi to t-m': (value) * 1609.344,
    'f-mi to t-km': (value) * 1.609344,
    'f-mi to t-yd': (value) * 1760,
    'f-mi to t-mi': value,
    /* Nautical Miles */
    //'f-nmi to t-nmi': value,
    /* Yards */
    'f-yd to t-mm': (value) * 914.4,
    'f-yd to t-cm': (value) * 91.44,
    'f-yd to t-ft': (value) * 3,
    'f-yd to t-in': (value) * 36,
    'f-yd to t-m': (value) * 0.9144,
    'f-yd to t-km': (value) * 0.000914,
    'f-yd to t-yd': value,
    'f-yd to t-mi': (value) * 0.000568,
  })[conversion];

  render() {
    const fromUnits = [
      { id: 1, name: 'Millimeters', short: 'mm', value: 'f-mm' },
      { id: 2, name: 'Centimeters', short: 'cm', value: 'f-cm' },
      { id: 3, name: 'Meters', short: 'm', value: 'f-m' },
      { id: 4, name: 'Kilometers', short: 'km', value: 'f-km' },
      { id: 5, name: 'Inches', short: 'in', value: 'f-in' },
      { id: 6, name: 'Feet', short: 'ft', value: 'f-ft' },
      { id: 7, name: 'Yards', short: 'yd', value: 'f-yd' },
      { id: 8, name: 'Miles', short: 'mi', value: 'f-mi' },
      //{ id: 9, name: 'Nautical Miles', short: 'nmi', value: 'f-nmi' },
    ];

    const toUnits = [
      { id: 1, name: 'Millimeters', short: 'mm', value: 't-mm' },
      { id: 2, name: 'Centimeters', short: 'cm', value: 't-cm' },
      { id: 3, name: 'Meters', short: 'm', value: 't-m' },
      { id: 4, name: 'Kilometers', short: 'km', value: 't-km' },
      { id: 5, name: 'Inches', short: 'in', value: 't-in' },
      { id: 6, name: 'Feet', short: 'ft', value: 't-ft' },
      { id: 7, name: 'Yards', short: 'yd', value: 't-yd' },
      { id: 8, name: 'Miles', short: 'mi', value: 't-mi' },
      //{ id: 9, name: 'Nautical Miles', short: 'nmi', value: 't-nmi' },
    ];

    return (
      <Container fluid={true} style={{ marginTop: 95 }}>
        <h5 align="center">Length</h5>
        <UnitTemplete {...this.state} conversionSwitch={this.conversionSwitch} fromUnits={fromUnits} toUnits={toUnits} />
      </Container>
    )
  }
}

export default Length;