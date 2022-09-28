import React, { Component } from 'react';
import { Container } from 'react-bootstrap'
import UnitTemplete from '../unit.templete';

export class HighPressure extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fromValue: 1,
      toValue: 1,
      fromUnit: 'f-bar',
      toUnit: 't-bar',
    };
  }

  componentDidMount() { }

  conversionSwitch = (conversion, value) => ({
    /* Bar */
    'f-bar to t-bar': value,
    'f-bar to t-psi': (value) * 14.50326,
    'f-bar to t-kPa': (value) * 100,
    'f-bar to t-MPa': (value) * 0.1,
    'f-bar to t-kgf/cm²': (value) * 1.01968,
    'f-bar to t-mm Hg': (value) * 750.0188,
    'f-bar to t-atm': (value) * 0.987167,

    /* PoundPerSquareInch */
    'f-psi to t-psi': value,
    'f-psi to t-bar': (value) * 0.06895,
    'f-psi to t-kPa': (value) * 6.895,
    'f-psi to t-MPa': (value) * 0.006895,
    'f-psi to t-kgf/cm²': (value) * 0.070307,
    'f-psi to t-mm Hg': (value) * 51.71379,
    'f-psi to t-atm': (value) * 0.068065,

    /* kilopascal */
    'f-kPa to t-kPa': value,
    'f-kPa to t-bar': (value) * 0.01,
    'f-kPa to t-psi': (value) * 0.1450,
    'f-kPa to t-MPa': (value) * 0.001,
    'f-kPa to t-kgf/cm²': (value) * 0.01020,
    'f-kPa to t-mm Hg': (value) * 7.5002,
    'f-kPa to t-atm': (value) * 0.00987,

    /* Megapascal */
    'f-MPa to t-MPa': value,
    'f-MPa to t-bar': (value) * 10,
    'f-MPa to t-psi': (value) * 145.03,
    'f-MPa to t-kPa': (value) * 1000,
    'f-MPa to t-kgf/cm²': (value) * 10.197,
    'f-MPa to t-mm Hg': (value) * 7500.2,
    'f-MPa to t-atm': (value) * 9.8717,


    /* KilogramForcePerCentiMeterSquare */
    'f-kgf/cm² to t-kgf/cm²': value,
    'f-kgf/cm² to t-bar': (value) * 0.9807,
    'f-kgf/cm² to t-psi': (value) * 14.22335,
    'f-kgf/cm² to t-kPa': (value) * 98.07,
    'f-kgf/cm² to t-MPa': (value) * 0.09807,
    'f-kgf/cm² to t-mm Hg': (value) * 735.5434,
    'f-kgf/cm² to t-atm': (value) * 0.968115,

    /* MillimeterOfMercury */
    'f-mm Hg to t-mm Hg': value,
    'f-mm Hg to t-bar': (value) * 0.001333,
    'f-mm Hg to t-psi': (value) * 0.019337,
    'f-mm Hg to t-kPa': (value) * 0.13333,
    'f-mm Hg to t-MPa': (value) * 0.000133,
    'f-mm Hg to t-kgf/cm²': (value) * 0.00136,
    'f-mm Hg to t-atm': (value) * 0.001316,

    /* Atmospheres */
    'f-atm to t-atm': value,
    'f-atm to t-bar': (value) * 1.013,
    'f-atm to t-psi': (value) * 14.69181,
    'f-atm to t-kPa': (value) * 101.3,
    'f-atm to t-MPa': (value) * 0.1013,
    'f-atm to t-kgf/cm²': (value) * 1.032936,
    'f-atm to t-mm Hg': (value) * 759.769,
  })[conversion];

  render() {
    const fromUnits = [
      { id: 1, name: 'Bar', short: 'bar', value: 'f-bar' },
      { id: 2, name: 'Pound/Square Inch', short: 'psi', value: 'f-psi' },
      { id: 3, name: 'kilopascal', short: 'kPa', value: 'f-kPa' },
      { id: 4, name: 'Megapascal', short: 'MPa', value: 'f-MPa' },
      { id: 5, name: 'Kilogram Force/CentiMeter Square', short: 'kgf/cm²', value: 'f-kgf/cm²' },
      { id: 6, name: 'Millimeter Of Mercury', short: 'mm Hg', value: 'f-mm Hg' },
      { id: 7, name: 'Atmospheres', short: 'atm', value: 'f-atm' },
    ];

    const toUnits = [
      { id: 1, name: 'Bar', short: 'bar', value: 't-bar' },
      { id: 2, name: 'Pound/Square Inch', short: 'psi', value: 't-psi' },
      { id: 3, name: 'kilopascal', short: 'kPa', value: 't-kPa' },
      { id: 4, name: 'Megapascal', short: 'MPa', value: 't-MPa' },
      { id: 5, name: 'Kilogram Force/CentiMeter Square', short: 'kgf/cm²', value: 't-kgf/cm²' },
      { id: 6, name: 'Millimeter Of Mercury', short: 'mm Hg', value: 't-mm Hg' },
      { id: 7, name: 'Atmospheres', short: 'atm', value: 't-atm' },
    ];

    return (
      <Container fluid={true} style={{marginTop: 95}}>
        <h5 align="center">High Pressure</h5>
        <UnitTemplete {...this.state} conversionSwitch={this.conversionSwitch} fromUnits={fromUnits} toUnits={toUnits} />
      </Container>
    )
  }
}

export default HighPressure;