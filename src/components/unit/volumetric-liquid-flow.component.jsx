import React, { Component } from 'react';
import { Container } from 'react-bootstrap'
import UnitTemplete from '../unit.templete';

export class VolumetricLiquidFlow extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fromValue: 1,
      toValue: 1,
      fromUnit: 'f-L/sec',
      toUnit: 't-L/sec',
    };
  }

  componentDidMount() { }

  conversionSwitch = (conversion, value) => ({
    /* Liter/second */
    'f-L/sec to t-L/sec': value,
    'f-L/sec to t-L/min': (value) * 60,
    'f-L/sec to t-m³/hr': (value) * 3.6,
    'f-L/sec to t-ft³/min': (value) * 2.119093,
    'f-L/sec to t-ft³/hr': (value) * 127.1197,
    'f-L/sec to t-gal/min': (value) * 15.85037,
    'f-L/sec to t-US brl/d': (value) * 543.4783,

    /* Liter/minute */
    'f-L/min to t-L/min': value,
    'f-L/min to t-L/sec': (value) * 0.016666,
    'f-L/min to t-m³/hr': (value) * 0.06,
    'f-L/min to t-ft³/min': (value) * 0.035317,
    'f-L/min to t-ft³/hr': (value) * 2.118577,
    'f-L/min to t-gal/min': (value) * 0.264162,
    'f-L/min to t-US brl/d': (value) * 9.057609,

    /* Meter cube/hour */
    'f-m³/hr to t-m³/hr': value,
    'f-m³/hr to t-L/sec': (value) * 0.277778,
    'f-m³/hr to t-L/min': (value) * 16.6667,
    'f-m³/hr to t-ft³/min': (value) * 0.588637,
    'f-m³/hr to t-ft³/hr': (value) * 35.31102,
    'f-m³/hr to t-gal/min': (value) * 4.40288,
    'f-m³/hr to t-US brl/d': (value) * 150.9661,

    /* Feet cube/minute */
    'f-ft³/min to t-ft³/min': value,
    'f-ft³/min to t-L/sec': (value) * 0.4719,
    'f-ft³/min to t-L/min': (value) * 28.31513,
    'f-ft³/min to t-m³/hr': (value) * 1.69884,
    'f-ft³/min to t-ft³/hr': (value) * 60,
    'f-ft³/min to t-gal/min': (value) * 7.479791,
    'f-ft³/min to t-US brl/d': (value) * 256.4674,


    /* Feet cube/hour */
    'f-ft³/hr to t-ft³/hr': value,
    'f-ft³/hr to t-L/sec': (value) * 0.007867,
    'f-ft³/hr to t-L/min': (value) * 0.472015,
    'f-ft³/hr to t-m³/hr': (value) * 0.02832,
    'f-ft³/hr to t-ft³/min': (value) * 0.01667,
    'f-ft³/hr to t-gal/min': (value) * 0.124689,
    'f-ft³/hr to t-US brl/d': (value) * 4.275326,

    /* US gallons/minute */
    'f-gal/min to t-gal/min': value,
    'f-gal/min to t-L/sec': (value) * 0.06309,
    'f-gal/min to t-L/min': (value) * 3.785551,
    'f-gal/min to t-m³/hr': (value) * 0.227124,
    'f-gal/min to t-ft³/min': (value) * 0.133694,
    'f-gal/min to t-ft³/hr': (value) * 8.019983,
    'f-gal/min to t-US brl/d': (value) * 34.28804,

    /* US barrels(oil)/day */
    'f-US brl/d to t-US brl/d': value,
    'f-US brl/d to t-L/sec': (value) * 0.00184,
    'f-US brl/d to t-L/min': (value) * 0.110404,
    'f-US brl/d to t-m³/hr': (value) * 0.006624,
    'f-US brl/d to t-ft³/min': (value) * 0.003899,
    'f-US brl/d to t-ft³/hr': (value) * 0.2339,
    'f-US brl/d to t-gal/min': (value) * 0.029165,
  })[conversion];

  render() {
    const fromUnits = [
      { id: 1, name: 'Liter/second', short: 'L/sec', value: 'f-L/sec' },
      { id: 2, name: 'Liter/minute', short: 'L/min', value: 'f-L/min' },
      { id: 3, name: 'Meter cube/hour', short: 'm³/hr', value: 'f-m³/hr' },
      { id: 4, name: 'Feet cube/minute', short: 'ft³/min', value: 'f-ft³/min' },
      { id: 5, name: 'Feet cube/hour', short: 'ft³/hr', value: 'f-ft³/hr' },
      { id: 6, name: 'US gallons/minute', short: 'gal/min', value: 'f-gal/min' },
      { id: 7, name: 'US barrels (oil)/day', short: 'US brl/d', value: 'f-US brl/d' },
    ];

    const toUnits = [
      { id: 1, name: 'Liter/second', short: 'L/sec', value: 't-L/sec' },
      { id: 2, name: 'Liter/minute', short: 'L/min', value: 't-L/min' },
      { id: 3, name: 'Meter cube/hour', short: 'm³/hr', value: 't-m³/hr' },
      { id: 4, name: 'Feet cube/minute', short: 'ft³/min', value: 't-ft³/min' },
      { id: 5, name: 'Feet cube/hour', short: 'ft³/hr', value: 't-ft³/hr' },
      { id: 6, name: 'US gallons/minute', short: 'gal/min', value: 't-gal/min' },
      { id: 7, name: 'US barrels(oil)/day', short: 'US brl/d', value: 't-US brl/d' },
    ];

    return (
      <Container fluid={true} style={{marginTop: 95}}>
        <h5 align="center">Volumetric Liquid Flow</h5>
        <UnitTemplete {...this.state} conversionSwitch={this.conversionSwitch} fromUnits={fromUnits} toUnits={toUnits} />
      </Container>
    )
  }
}

export default VolumetricLiquidFlow;