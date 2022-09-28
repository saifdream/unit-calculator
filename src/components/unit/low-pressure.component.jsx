import React, { Component } from 'react';
import { Container } from 'react-bootstrap'
import UnitTemplete from '../unit.templete';

export class LowPressure extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fromValue: 1,
      toValue: 1,
      fromUnit: 'f-mH₂O',
      toUnit: 't-mH₂O',
    };
  }

  componentDidMount() { }

  conversionSwitch = (conversion, value) => ({
    /* MeterOfWater */
    'f-mH₂O to t-mH₂O': value,
    'f-mH₂O to t-ftH₂O': (value) * 3.280696,
    'f-mH₂O to t-cmHg': (value) * 7.356339,
    'f-mH₂O to t-inHg': (value) * 2.896043,
    'f-mH₂O to t-inH₂O': (value) * 39.36572,
    'f-mH₂O to t-Pa': (value) * 9806,

    /* FeetOfWater*/
    'f-ftH₂O to t-ftH₂O': value,
    'f-ftH₂O to t-mH₂O': (value) * 0.304813,
    'f-ftH₂O to t-cmHg': (value) * 2.242311,
    'f-ftH₂O to t-inHg': (value) * 0.882753,
    'f-ftH₂O to t-inH₂O': (value) * 11.9992,
    'f-ftH₂O to t-Pa': (value) * 2989,

    /* CentimeterOfMercury */
    'f-cmHg to t-cmHg': value,
    'f-cmHg to t-mH₂O': (value) * 0.135937,
    'f-cmHg to t-ftH₂O': (value) * 0.445969,
    'f-cmHg to t-inHg': (value) * 0.39368,
    'f-cmHg to t-inH₂O': (value) * 5.351265,
    'f-cmHg to t-Pa': (value) * 1333,

    /* InchesOfMercury */
    'f-inHg to t-inHg': value,
    'f-inHg to t-mH₂O': (value) * 0.345299,
    'f-inHg to t-ftH₂O': (value) * 1.13282,
    'f-inHg to t-cmHg': (value) * 2.540135,
    'f-inHg to t-inH₂O': (value) * 13.59293,
    'f-inHg to t-Pa': (value) * 3386,


    /* InchesOfWater */
    'f-inH₂O to t-inH₂O': value,
    'f-inH₂O to t-mH₂O': (value) * 0.025403,
    'f-inH₂O to t-ftH₂O': (value) * 0.083339,
    'f-inH₂O to t-cmHg': (value) * 0.186872,
    'f-inH₂O to t-inHg': (value) * 0.073568,
    'f-inH₂O to t-Pa': (value) * 249.1,

    /* Pascal */
    'f-Pa to t-Pa': value,
    'f-Pa to t-mH₂O': (value) * 0.000102,
    'f-Pa to t-ftH₂O': (value) * 0.000335,
    'f-Pa to t-cmHg': (value) * 0.00075,
    'f-Pa to t-inHg': (value) * 0.000295,
    'f-Pa to t-inH₂O': (value) * 0.004014,
  })[conversion];

  render() {
    const fromUnits = [
      { id: 1, name: 'Meter Of Water', short: 'mH₂O', value: 'f-mH₂O' },
      { id: 2, name: 'Feet Of Water', short: 'ftH₂O', value: 'f-ftH₂O' },
      { id: 3, name: 'Centimeter of mercury', short: 'cmHg', value: 'f-cmHg' },
      { id: 4, name: 'Inches of mercury', short: 'inHg', value: 'f-inHg' },
      { id: 5, name: 'Inches of water', short: 'inH₂O', value: 'f-inH₂O' },
      { id: 6, name: 'Pascal', short: 'Pa', value: 'f-Pa' },
    ];

    const toUnits = [
      { id: 1, name: 'Meter Of Water', short: 'mH₂O', value: 't-mH₂O' },
      { id: 2, name: 'Feet Of Water', short: 'ftH₂O', value: 't-ftH₂O' },
      { id: 3, name: 'Centimeter of mercury', short: 'cmHg', value: 't-cmHg' },
      { id: 4, name: 'Inches of mercury', short: 'inHg', value: 't-inHg' },
      { id: 5, name: 'Inches of water', short: 'inH₂O', value: 't-inH₂O' },
      { id: 6, name: 'Pascal', short: 'Pa', value: 't-Pa' },
    ];

    return (
      <Container fluid={true} style={{marginTop: 95}}>
        <h5 align="center">Low Pressure</h5>
        <UnitTemplete {...this.state} conversionSwitch={this.conversionSwitch} fromUnits={fromUnits} toUnits={toUnits} />
      </Container>
    )
  }
}

export default LowPressure;