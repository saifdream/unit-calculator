import React, { Component } from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './unit.templete.css'

export class UnitTemplete extends Component {
  constructor(props) {
    super(props);
    this.convert = this.convert.bind(this);
    this.exchange = this.exchange.bind(this);
    this.fromValueChange = this.fromValueChange.bind(this);
    this.setFromUnit = this.setFromUnit.bind(this);
    this.setToUnit = this.setToUnit.bind(this);
    this.isActive = this.isActive.bind(this);
    this.fromListGroupItem = this.fromListGroupItem.bind(this);
    this.toListGroupItem = this.toListGroupItem.bind(this);
    this.fromOption = this.fromOption.bind(this);
    this.toOption = this.toOption.bind(this);

    this.state = {
      fromUnits: props.fromUnits,
      toUnits: props.toUnits,

      fromValue: props.fromValue || 0,
      toValue: this.roundTo(props.toValue) || 0,

      fromUnit: props.fromUnit,
      toUnit: props.toUnit,
    };
  }

  componentDidMount() {
    this.convert();
  }

  componentWillReceiveProps(newProps) {
    this.setState({
      fromValue: parseFloat(newProps.fromValue) || 0,
      toValue: parseFloat(this.roundTo(newProps.toValue)) || 0,
    });
  }

  convert() {
    this.setState((state, props) => ({
      fromValue: state.fromValue || '',
      fromUnit: state.fromUnit || '',
      toUnit: state.toUnit || 0,
    }), () => {
      this.setState((state, props) => ({
        toValue: parseFloat(this.props.conversionSwitch(state.fromUnit + " to " + state.toUnit, state.fromValue) || 0),
      }));
    });
  }

  exchange() {
    this.setState((state, props) => ({
      fromValue: state.toValue,
      toValue: state.fromValue,
      fromUnit: state.toUnit.replace("t-", "f-"),
      toUnit: state.fromUnit.replace("f-", "t-"),
    }), () => {
      this.convert();
    });
  }

  getDecimalPrecision = a => {
    if (!isFinite(a)) return 0;
    var e = 1, p = 0;
    while (Math.round(a * e) / e !== a) { e *= 10; p++; }
    return p;
  }

  roundTo = num => {
    const decimalCount = 3;
    if (Number.isInteger(num) === true)
      return num;
    else if (this.getDecimalPrecision(num) < decimalCount)
      return num;

    let numExp = num.toExponential();
    let minusIndex = numExp.indexOf("-");

    if (minusIndex !== -1) {
      var roundPosition = parseInt(numExp.substring(minusIndex + 1)) + (decimalCount - 1);
      return num.toFixed(roundPosition);
    }
    return num.toFixed(decimalCount);
  }

  fromValueChange = e => {
    this.setState({ fromValue: e.target.value || 0 }, () => {
      this.convert();
    });
  };

  setFromUnit = e => {
    this.setState({
      fromUnit: e.target.value
    }, () => {
      this.convert();
    });
  }

  setToUnit = e => {
    this.setState({
      toUnit: e.target.value
    }, () => {
      this.convert();
    });
  }

  isActive = (type, unit) => {
    switch (type) {
      case 'FromList':
        return this.state.fromUnit === unit;

      case 'ToList':
        return this.state.toUnit === unit;

      default:
        return false;
    }
  }

  fromListGroupItem() {
    return this.state.fromUnits.map((u, i) => {
      return <Button key={i.toString()} className={`list-group-item list-group-item-action ${this.isActive('FromList', u.value) ? "active" : ""}`} onClick={(e) => { if (!e.target.value) return; this.setState({ fromUnit: e.target.value }); this.convert(); }} value={u.value}>{u.name} (<i>{u.short}</i>)</Button>;
    })
  }

  fromOption() {
    return this.state.fromUnits.map((u, i) => {
      return <option key={i.toString()} value={u.value}> {u.name} ({u.short}) </option>;
    })
  }

  toListGroupItem() {
    return this.state.toUnits.map((u, i) => {
      return <Button key={i.toString()} className={`list-group-item list-group-item-action ${this.isActive('ToList', u.value) ? "active" : ""}`} onClick={(e) => { if (!e.target.value) return; this.setState({ toUnit: e.target.value }); this.convert(); }} value={u.value}>{u.name} (<i>{u.short}</i>)</Button>;
    })
  }

  toOption() {
    return this.state.toUnits.map((u, i) => {
      return <option key={i.toString()} value={u.value}> {u.name} ({u.short}) </option>;
    })
  }

  render() {
    return (
      <Row className="justify-content-sm-center" style={{ marginTop: 30 }}>
        <Col sm={12} style={{ textAlign: 'Center', marginBottom: 30 }}>
          <Button variant="warning" size="md" onClick={this.exchange} ><FontAwesomeIcon icon="exchange-alt" /></Button>
        </Col>
        <Col xm={6} sm={4} md={4} lg={3} xl={3}>
          <Row>
            <Form.Group as={Col} sm="12" controlId="convertFrom" style={{ fontSize: 18, fontWeight: 700 }}>
              <Form.Label>From</Form.Label>
              <Form.Control type="number" value={this.state.fromValue} onChange={this.fromValueChange} />
            </Form.Group>
          </Row>
          <div className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
            <div className="list-group">
              {this.fromListGroupItem()}
            </div>
          </div>
          <Row className="d-xm-block d-sm-none d-md-none d-lg-none d-xl-none">
            <Form.Group as={Col} sm="12" controlId="from">
              <Form.Control as="select" value={this.state.fromUnit} onChange={this.setFromUnit}>
                {this.fromOption()}
              </Form.Control>
            </Form.Group>
          </Row>
        </Col>
        <Col xm={6} sm={4} className="d-xm-block d-sm-none d-md-none d-lg-none d-xl-none" style={{ 'marginTop': 25, 'marginBottom': 25 }}>
          <div style={{ borderTop: 5, borderTopColor: '#ffc002', borderTopStyle: 'solid' }}></div>
        </Col>
        <br />
        <Col xm={6} sm={4} md={4} lg={3} xl={3}>
          <Row>
            <Form.Group as={Col} sm="12" controlId="convertTo" style={{ fontSize: 18, fontWeight: 700 }}>
              <Form.Label>To</Form.Label>
              <Form.Control type="number" min={0} disabled value={this.state.toValue} />
            </Form.Group>
          </Row>
          <div className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
            <div className="list-group">
              {this.toListGroupItem()}
            </div>
          </div>
          <Row className="d-xm-block d-sm-none d-md-none d-lg-none d-xl-none">
            <Form.Group as={Col} sm="12" controlId="to">
              <Form.Control as="select" value={this.state.toUnit} onChange={this.setToUnit}>
                {this.toOption()}
              </Form.Control>
            </Form.Group>
          </Row>
        </Col>
      </Row>
    )
  }
}

export default UnitTemplete;