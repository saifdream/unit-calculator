import React, { Component } from "react";
import { Row, Col, Form, Image } from 'react-bootstrap';

class Cylinder extends Component {
    constructor(props) {
        super(props);
        this.conversionSwitch = props.conversionSwitch.bind(this);
        this.radiusChange = this.radiusChange.bind(this);
        this.heightChange = this.heightChange.bind(this);
        this.setRadiusUnit = this.setRadiusUnit.bind(this);
        this.setHeightUnit = this.setHeightUnit.bind(this);
        this.setResult = this.setResult.bind(this);
        this.getResult = this.getResult.bind(this);
        this.state = {
            units: props.units,
            radiusUnit: props.units[0]['name'],
            heightUnit: props.units[0]['name'],
            pi: props.pi,
            radius: 1,
            height: 1,
            result: 0,
        };
    }

    componentDidMount() {
        this.setResult();
    }

    radiusChange = e => {
        this.setState({ radius: e.target.value || 0 }, () => {
            this.setResult();
        });
    }

    heightChange = e => {
        this.setState({ height: e.target.value || 0 }, () => {
            this.setResult();
        });
    }

    setRadiusUnit = e => {
        this.setState({ radiusUnit: e.target.value || 0 }, () => {
            this.setResult();
        });
    }

    setHeightUnit = e => {
        this.setState({ heightUnit: e.target.value || 0 }, () => {
            this.setResult();
        });
    }

    optionList() {
        return this.state.units.map((u, i) => {
            return <option key={i} value={u.name}> {u.name} </option>;
        })
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

    setResult() {
        if (this.state.radiusUnit === this.state.heightUnit) {
            this.setState({
                result: this.roundTo(this.state.pi * Math.pow(this.state.radius, 2) * this.state.height),
                radiusUnitResult: 0,
                heightUnitResult: 0,
            });
        } else {
            let heightUnitToRadiusUnit = this.roundTo(this.conversionSwitch(this.state.heightUnit + " to " + this.state.radiusUnit, this.state.height || 0));
            let radiusUnitToHeightUnit = this.roundTo(this.conversionSwitch(this.state.radiusUnit + " to " + this.state.heightUnit, this.state.radius || 0));
            this.setState({
                result: 0,
                heightUnitToRadiusUnit: heightUnitToRadiusUnit,
                radiusUnitToHeightUnit: radiusUnitToHeightUnit,
                radiusUnitResult: this.state.pi * Math.pow(this.state.radius, 2) * parseFloat(heightUnitToRadiusUnit),
                heightUnitResult: this.state.pi * Math.pow(parseFloat(radiusUnitToHeightUnit), 2) * this.state.height,
            });
        }
    }

    getResult() {
        if (this.state.radiusUnit === this.state.heightUnit) {
            return this.state.result ? <p style={{ fontSize: 20 }}>Volume = π×{this.state.radius}²×{this.state.height} = <strong>{this.state.result} {this.state.radiusUnit}³</strong></p> : '';
        } else {
            let radiusJsx = this.state.radiusUnitResult ? <p key="1" style={{ fontSize: 20 }}>Volume = π×{this.state.radius}²×{this.state.heightUnitToRadiusUnit} = <strong>{this.state.radiusUnitResult} {this.state.radiusUnit}³</strong></p> : '';
            let heightJsx = this.state.radiusUnitResult ? <p key="3" style={{ fontSize: 20 }}>Volume = π×{this.state.radiusUnitToHeightUnit}²×{this.state.height} = <strong>{this.state.heightUnitResult} {this.state.heightUnit}³</strong></p> : '';
            return ([radiusJsx, <p key="2">Or</p>, heightJsx]);
        }
    }

    render() {
        return (
            <Form style={{ paddingTop: 30 }}>
                <Row>
                    <Col sm={12} style={{ textAlign: 'center', paddingBottom: 30 }}>
                        <Image src={require('../../../img/volumes/cylinder.png')} rounded />
                    </Col>
                </Row>
                <Form.Group as={Row}>
                    <Form.Label column sm="3">
                        <strong>Base Radius (<i>r</i>)</strong>
                    </Form.Label>
                    <Col sm="4">
                        <Form.Control type="number" value={this.state.radius} onChange={this.radiusChange} placeholder="Radius" />
                    </Col>
                    <Col sm="4">
                        <Form.Control as="select" value={this.state.radiusUnit} onChange={this.setRadiusUnit}>
                            {this.optionList()}
                        </Form.Control>
                    </Col>
                </Form.Group>
                <Form.Group as={Row}>
                    <Form.Label column sm="3">
                        <strong>Height (<i>h</i>)</strong>
                    </Form.Label>
                    <Col sm="4">
                        <Form.Control type="number" value={this.state.height} onChange={this.heightChange} placeholder="Height" />
                    </Col>
                    <Col sm="4">
                        <Form.Control as="select" value={this.state.heightUnit} onChange={this.setHeightUnit}>
                            {this.optionList()}
                        </Form.Control>
                    </Col>
                </Form.Group>
                <Row>
                    <Col sm={12} style={{ textAlign: 'center', paddingTop: 20, paddingBottom: 20 }}>
                        {this.getResult()}
                    </Col>
                </Row>
            </Form>
        )
    }
}

export default Cylinder;